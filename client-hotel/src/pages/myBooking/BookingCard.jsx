import axios from "axios";
import Swal from "sweetalert2";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Rating from "react-rating";
import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { useContext } from "react";
import { authContext } from "../../components/authProvider/AuthProvider";
import { useEffect } from "react";

// import { useQuery } from "@tanstack/react-query";
const BookingCard = ({ book, refetch }) => {
  const [aUser, setUser] = useState(null);
  const { user } = useContext(authContext);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, []);
  //   console.log(Object.keys(book).join(","));
  const [rating, setRating] = useState();
  const [btn, setBtn] = useState(false);

  const {
    from,
    to,

    remainingSeat,
    _id,
    thumbnail,
    title,
    price,
    bookSeat,
    roomId,

    // isBooked,
    // amenities,
    // roomSize,
    // ratings,
    // reviewCounts,
  } = book || {};

  const handleBookingDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const nowSeat = parseInt(remainingSeat) + parseInt(bookSeat);
        axios
          .delete(`https://server-hotel-five.vercel.app/booking/${_id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });
              refetch();

              axios
                .patch(
                  `https://server-hotel-five.vercel.app/services/${roomId}`,
                  {
                    availableSeats: nowSeat,
                  }
                )

                .then((data) => {
                  console.log("now available room");
                });
            }
          });
      }
    });

    // console.log(_id);
  };

  //   handle date

  const handleUpdateDate = (e) => {
    e.preventDefault();
    const form = e.target;
    const update = form.updateDate.value;

    axios
      .patch(`https://server-hotel-five.vercel.app/booking/${_id}`, { update })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your date is Updated Success!",
            icon: "success",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   handle review
  // console.log("rating", parseInt(rating));

  const handleReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const review = form.review.value;
    const email = aUser.email;
    const name = aUser.displayName;

    const image = aUser.photoURL;
    const reviews = { review, rating, name, image, roomId, email, from };
    // const reviews = { rating };
    // console.log(reviews);

    axios
      .post("https://server-hotel-five.vercel.app/review", reviews)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your post has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });

          setBtn(false);
        }
      });
  };

  //   handle hidden and show btn

  const handleToggle = (toggle) => {};

  return (
    <div className="relative">
      {/* container  */}
      <div
        className={`bg-black bg-opacity-30  w-full h-[100vh] ${
          btn ? "" : "hidden"
        }   absolute z-10  `}
      >
        <div className="max-w-[600px] mx-auto border m-40 p-14 ">
          <form
            onSubmit={handleReview}
            className="flex flex-col max-w-[400px] mx-auto "
          >
            <h1 className="text-white md:text-2xl">
              Share Your Opinion With Us
            </h1>
            {/* start */}
            <div
              className="flex text-3xl my-4  start-box"
              title="Double click to give star"
            >
              <Rating
                placeholderRating={3.5}
                emptySymbol={<FaRegStar className="text-yellow-500" />}
                placeholderSymbol={<FaStar className="text-yellow-500" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
                onClick={(rate) => {
                  setRating(rate);
                }}
              />
            </div>
            <textarea
              name="review"
              id=""
              className="border px-4"
              cols="100"
              rows="5"
              placeholder="Review"
            ></textarea>
            <input
              type="submit"
              className="btn btn-secondary mt-4"
              value="Submit"
            />

            <input
              onClick={() => handleToggle(setBtn(false))}
              type="button"
              className="btn btn-accent mt-4"
              value="Cancel"
            />
          </form>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>image</th>
              <th>RoomType</th>
              <th>price</th>
              <th>from</th>
              <th>to</th>
              <th>Action</th>
              <th>Review</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200 ">
              <th>1</th>
              <td className="flex  items-center">
                <img src={thumbnail} alt="" className="w-16 h-16" />
                <span className="font-bold md:ml-3">{name}</span>
              </td>
              <td>{title}</td>
              <td>${price}</td>
              <td>{from}</td>
              <td>{to}</td>
              <td className="flex flex-col md:flex-row   md:items-center  ">
                <button
                  onClick={() => handleBookingDelete(_id)}
                  className="btn w-full md:w-16 btn-xs bg-red-600 text-white md:mr-2"
                >
                  Delete
                </button>

                <form onSubmit={handleUpdateDate}>
                  <input type="date" name="updateDate" className="my-2" />
                  <input
                    type="submit"
                    className="btn w-full md:w-16 btn-xs bg-green-700 text-white md:ml-2"
                    value="update "
                    name=""
                    id=""
                  />
                </form>
              </td>
              <td>
                <button
                  onClick={() => handleToggle(setBtn(true))}
                  className="btn w-full btn-xs bg-yellow-500 text-white"
                >
                  Review
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingCard;
