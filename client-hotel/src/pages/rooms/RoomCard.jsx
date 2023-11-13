import { FaWifi, FaCar, FaCoffee } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const RoomCard = ({ service }) => {
  // console.log(Object.keys(service).join(","));
  const [reviews, setReviews] = useState(null);

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
    amenities,
    roomSize,
    ratings,
    reviewCounts,
  } = service || {};

  // function review count

  useEffect(() => {
    axios.get("https://server-hotel-five.vercel.app/review").then((res) => {
      setReviews(res.data);
    });
  }, []);

  const publickRevi = reviews?.filter((rv) => rv.roomId === _id);
  // console.log("jajaja", publickRevi);

  const goTo = useNavigate();
  const handleDetails = (id) => {
    goTo(`/roomDetails/${id}`);
  };

  return (
    <div>
      <div className="card    bg-base-100 shadow-xl relative    overflow-hidden  hover:border-r-8  hover:border-green-500 border-r-8 border-b-8  ">
        <figure>
          <img
            src={thumbnail}
            alt="Rooms"
            className=" max-h-[200px]  w-full object-cover"
          />
        </figure>
        {/* price and booking button */}
        <div className="bg-slate-500 max-w-[200px]  absolute w-full left-20 top-32 bg-opacity-60 text-white p-4 text-center  h-20">
          <h1 className="font-bold">${price}/night</h1>
          <button
            onClick={() => handleDetails(_id)}
            className="font-semibold hover:border btn bg-green-500 text-white  btn-xs "
          >
            <a>Details</a>
          </button>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>{description?.slice(0, 100)}</p>
          <div className="card-actions justify-center pt-4  ">
            <FaWifi></FaWifi> <FaCar /> <FaCoffee />
          </div>

          {/* social */}

          <div className="flex justify-between">
            <div>
              <a href="">{publickRevi?.length}Review</a>
            </div>

            <div className="md:text-2xl ">
              <Rating
                emptySymbol={<FaRegStar className="text-yellow-500" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
                initialRating={ratings}
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
