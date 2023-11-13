import { Navigate, useNavigate, useParams } from "react-router-dom";
import UseQuery from "../../hooks/UseQuery";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";
import moment from "moment";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ImageMagnify from "./ImageMagnify";
const RoomDetails = () => {
  const [bookbtn, setBookBtn] = useState(true);
  const [reviews, setReviews] = useState(null);
  const { user } = UseAuth();
  const { data, isLoading, refetch } = UseQuery();

  const dataId = useParams();

  useEffect(() => {
    axios.get("https://server-hotel-five.vercel.app/review").then((res) => {
      setReviews(res.data);
    });
  }, []);
  // const allserviceId = data?.filter((as) => console.log(as));
  // console.log("kaki", allserviceId);

  const aService = data?.find((service) => service._id === dataId?.id);
  // console.log("kaki", aService);

  const publickRevi = reviews?.filter((rv) => rv.roomId === aService?._id);
  // console.log("kaka", publickRevi);

  const {
    _id,
    thumbnail,
    image1,
    image2,
    title,
    description,
    price,
    availableSeats,
    isBooked,
    rating,
    name,
    email,
    review,
    image,
    to,
    // from,
    amenities,
    roomSize,
    ratings,
    reviewCounts,
  } = aService || {};
  //   console.log("one", aService);
  //   console.log(dataId);
  //   console.log(data);

  const presentDate = new Date();

  console.log("string", moment(presentDate).format("MMM Do YY"));
  const first = moment(presentDate).format("MMM Do YY");
  const last = moment(to).format("MMM Do YY");

  // console.log("hello firs", first, last);
  const gotTo = useNavigate();
  const handleBookingRoom = (e) => {
    e.preventDefault();

    if (!user?.email) {
      return gotTo("/login");
    }

    Swal.fire({
      title: `${title}`,
      text: `price:$${price} RoomSize: ${roomSize}`,

      imageUrl: `${thumbnail}`,

      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm  ",
    }).then((result) => {
      if (result.isConfirmed) {
        const form = e.target;
        const from = form.date.value;
        const to = form.dateOut.value;
        const email = form.email.value;
        const bookSeat = form.bookSeat.value;
        const roomId = _id;
        // const bookStatus = "Already Booked";
        const remainingSeat = parseInt(availableSeats) - parseInt(bookSeat);

        const booking = {
          from,
          to,
          email,
          roomId,
          description,
          price,
          thumbnail,
          title,
          amenities,
          bookSeat,
          remainingSeat,
          availableSeats,
        };

        if (availableSeats < 1 && availableSeats > 0) {
          setBookBtn(false);
        }

        axios
          .post("https://server-hotel-five.vercel.app/booking", booking)
          .then((res) => {
            // console.log(res?.data);
            if (res.data.acknowledged) {
              Swal.fire("Booked", "Your Room are booked now", "success");
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...Not booked",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });

        // update seat

        axios
          .patch(`https://server-hotel-five.vercel.app/services/${_id}`, {
            availableSeats: remainingSeat,
            to: to,
            from: from,
          })
          .then((res) => {
            // console.log(res?.data);
            if (res.data.acknowledged) {
              // Swal.fire("Booked", "Your Room are booked now", "success");
              // console.log("updated", res.data);
              refetch();
            }
          });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen absolute w-full h-full">
        <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-green-500 "></div>
        <h2 className="text-3xl font-black text-green-500 pl-2">LOADING</h2>
      </div>
    );
  }

  const raja = [`${image1}`, `${image2}`, `${thumbnail}`];

  // console.log("soosso", raja);
  return (
    <div>
      <Banner />
      <div className="max-w-[1200px] mx-auto px-4  my-12">
        <Helmet>
          <title>Room Details</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        {/* container */}
        <div className="flex flex-col md:flex-row gap-4 ">
          {/* left */}
          <div className=" md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-4">
              <div className="w-full md:col-span-6  row-span-2 ">
                {/* <img src={thumbnail} className="h-full w-full" alt="" /> */}

                <PhotoView src={thumbnail}>
                  <img src={thumbnail} className="h-full" alt="" />
                </PhotoView>
              </div>

              <div className="col-span-6">
                {/* <img src={image1} className="w-full " alt="" /> */}
                {/* <ImageMagnify img1={image1} img2={image1}></ImageMagnify> */}
                <PhotoView src={image1}>
                  <img src={image1} alt="" />
                </PhotoView>
              </div>
              <div className="col-span-6">
                {/* <img src={image2} className="w-full" alt="" /> */}

                {/* <ImageMagnify img1={image2} img2={image2}></ImageMagnify> */}
                <PhotoView src={image2}>
                  <img src={image2} alt="" />
                </PhotoView>
              </div>
            </div>

            {/* about  */}

            <div className="py-8">
              <div className="flex justify-between  ">
                <div>
                  <h2 className="md:text-4xl">{title}</h2>
                  {/* <h2>{name}</h2> */}
                  <h2 className="font-bold md:text-2xl">
                    Price: PerNight/${price}
                  </h2>
                  <h2 className=" md:text-2xl">Room Size:{roomSize}</h2>

                  <div className="mt-8">
                    <h1 className="font-semibold">rating {ratings}</h1>
                    <Rating
                      className="md:text-3xl"
                      emptySymbol={<FaRegStar className="text-yellow-400" />}
                      fullSymbol={<FaStar className="text-yellow-400" />}
                      initialRating={ratings}
                      readonly
                    />
                  </div>
                </div>

                <div className="my-11">
                  {/* review  */}
                  <h1 className="text-2xl font-bold p-2">Review clients</h1>
                  <div className="overflow-y-scroll  max-h-[200px] mb-6  border p-3 ">
                    {publickRevi?.map((rev) => (
                      <>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                          <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                              <div>
                                <img
                                  src={rev?.image}
                                  alt=""
                                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold">{rev?.name}</h4>
                                <span className="text-xs dark:text-gray-400">
                                  {rev?.from}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-500">
                              <Rating
                                emptySymbol={
                                  <FaRegStar className="text-yellow-400" />
                                }
                                fullSymbol={
                                  <FaStar className="text-yellow-400" />
                                }
                                initialRating={rev?.rating}
                                readonly
                              />
                              {/* <span className="text-xl font-bold">
                              {rev.rating}
                            </span> */}
                            </div>
                          </div>
                          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                            <p>{rev?.review}</p>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              {/* des */}

              <div>
                <h1 className="txt-2xl font-semibold ">Description:</h1>
                <p>{description}</p>
              </div>

              {/* fetures */}

              <div className=" my-4 ">
                <h1 className="font-bold text-lg ">Features:</h1>

                <div className="flex  mr-2 my-4">
                  {amenities?.map((features) => (
                    <>
                      <div className="">
                        <button className="btn mr-2"> {features}</button>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            {/* <button className="btn btn-warning">Book This Room</button> */}
          </div>

          {/* right */}
          <div className="md:w-1/3 w-full my-10 md:my-0   ">
            <h1 className="text-4xl font-bold text-center py-8">Book A Room</h1>
            <form onSubmit={handleBookingRoom}>
              {/* available seat */}

              <div className="w-full">
                <button className="p-2 bg-green-600 text-white">
                  Available seat {availableSeats}
                </button>
              </div>

              {/* Book seat*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[20px] ">
                    select Seat
                  </span>
                </label>
                <select
                  name="bookSeat"
                  id=""
                  className="bg-green-500 text-white p-2"
                >
                  <option className="p-2" value="1">
                    1
                  </option>
                  <option className="p-2" value="2">
                    2
                  </option>
                  <option className="p-2" value="3">
                    3
                  </option>
                  <option className="p-2" value="4">
                    4
                  </option>
                </select>
              </div>

              {/* check in date*/}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Check in Date</span>
                </label>
                <label className="input-group">
                  <span>Check in Date</span>
                  <input
                    type="date"
                    placeholder="date"
                    className="input input-bordered w-full"
                    name="date"
                  />
                </label>
              </div>

              {/* check out date*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Check Out Date</span>
                </label>
                <label className="input-group">
                  <span>Check out Date</span>
                  <input
                    type="date"
                    placeholder="date"
                    className="input input-bordered w-full"
                    name="dateOut"
                  />
                </label>
              </div>

              {/* your email */}

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <label className="input-group">
                  <span>Email</span>
                  <input
                    type="email"
                    defaultValue={user ? user?.email : ""}
                    className="input input-bordered w-full"
                    name="email"
                  />
                </label>
              </div>

              {/* submit */}
              {availableSeats > 0 ? (
                <div>
                  <input
                    type="submit"
                    className="btn  bg-green-500 text-white w-full"
                    value="Book Room"
                    name=""
                    id=""
                  />
                </div>
              ) : (
                <div className="w-full">
                  <input
                    type="submit"
                    className="btn  bg-green-500 text-white w-full "
                    value="not available"
                    name=""
                    id=""
                    disabled
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
