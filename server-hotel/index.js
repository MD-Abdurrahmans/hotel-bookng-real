const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// middle ware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hotelbooking-52dcf.web.app",
      "https://hotelbooking-52dcf.firebaseapp.com",
    ],
    credentials: true,
  })
);

// mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r486pno.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// middleware
const logger = async (req, res, next) => {
  console.log("called self middleware", req.host, req.originalUrl);

  next();
};

//  verifiedToken;

const verifiedToken = async (req, res, next) => {
  const token = req.cookies?.token;
  //  console.log("vt", req.cookies.token);

  if (!token) {
    return res.status(401).send({ status: "Unauthorized" });
  }

  jwt.verify(token, process.env.SECRET_TOKEN_ACCESS, (err, decoded) => {
    if (err) {
      return res.status(403).send({ status: "Unauthorized access" });
    }

    req.user = decoded;

    next();

    // console.log("vU", req.user.email);
  });
};

async function run() {
  try {
    // const client = new MongoClient(uri);
    // await client.connect();
    const bookingCollection = client.db("hotelDB").collection("hotelBooking");
    const hotelCollection = client.db("hotelDB").collection("hotelServices");
    const reviewsCollection = client.db("hotelDB").collection("hotelReviews");

    // create token

    app.post("/jwt", (req, res) => {
      console.log("authEmail", req.body?.email); //from auth email
      const user = req.body;

      const token = jwt.sign(user, process.env.SECRET_TOKEN_ACCESS, {
        expiresIn: "24h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      });

      console.log("tk", req.cookies.token);
      res.send({ status: "success" });
    });

    app.post("/logout", async (req, res) => {
      const user = req.body;
      console.log("logging out", user);
      res
        .clearCookie("token", { maxAge: 0, sameSite: "none", secure: true })
        .send({ success: true });
    });

    // client route below here
    app.get("/", (req, res) => {
      res.send("HOTEL BOOKING RUNNING!");
    });

    // with filter
    app.get("/services", async (req, res) => {
      const queryObj = {};
      const sortField = req.query?.sortField;
      const sortOrder = req.query?.sortOrder;
      if (sortField && sortOrder) {
        queryObj[sortField] = sortOrder;
      }
      console.log(sortField, sortOrder);

      const result = await hotelCollection.find().sort(queryObj).toArray();
      res.send(result);
    });

    // update services seat

    app.patch("/services/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const seat = req.body;
      console.log("serviceId", seat, id);
      const updateDoc = {
        $set: {
          availableSeats: seat.availableSeats,
          to: seat.to,
          from: seat.from,
          // review: seat[reviews],
        },
      };

      const result = await hotelCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      res.send(result);
      console.log("seat", seat, id);
      console.log("sss", req.body);
      console.log(result);
    });

    // insert booking room
    app.post("/booking", async (req, res) => {
      const booking = await req.body;

      const result = await bookingCollection.insertOne(booking);
      res.send(result);

      console.log("booking", booking);
    });

    app.get("/booking", logger, verifiedToken, async (req, res) => {
      if (req.query?.email !== req.user?.email) {
        return res.status(403).send({ status: "forbidden" });
      }
      // console.log("q", req.query?.email);

      let query = {};
      if (req.query?.email) {
        query = { email: req.query?.email };

        // console.log(query);

        const result = await bookingCollection.find(query).toArray();
        res.send(result);
      }
    });

    // delete booking

    app.delete("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log(filter);
      try {
        const result = await bookingCollection.deleteOne(filter);
        res.send(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    });

    // update date patch

    app.patch("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const update = req.body;
      //   console.log(id, update.update);

      const options = { upsert: true };
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          to: update.update,
        },
      };

      const result = await bookingCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      res.send(result);
      console.log(result);
    });

    // reviews
    app.post("/review", async (req, res) => {
      const reviews = req.body;
      // console.log(reviews);

      const result = await reviewsCollection.insertOne(reviews);

      res.send(result);
      // console.log(result);
    });

    // get review

    app.get("/review", async (req, res) => {
      const result = await reviewsCollection.find().toArray();

      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
