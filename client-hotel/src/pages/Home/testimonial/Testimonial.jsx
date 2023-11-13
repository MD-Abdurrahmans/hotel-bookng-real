// import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { FaPenFancy } from "react-icons/fa";
import Rating from "react-rating";

// swip

import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";

const Testimonial = () => {
  const [review, setReview] = useState();
  const [width, setWidth] = useState();
  // const [view, setView] = useState();
  function raj() {
    setWidth(window.innerWidth);
  }
  window.onresize = raj;

  let view = 3;

  if (width <= 900) {
    view = 1;
  }
  useEffect(() => {
    axios.get("https://server-hotel-five.vercel.app/review").then((res) => {
      // console.log("testi", res.data);

      setReview(res?.data);
    });
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 logo">
      <h1 className="text-2xl md:text-4xl text-center text-green-500  py-5">
        What Clients Says{" "}
      </h1>
      <div className="">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={view}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper   max-w-[1200px] mx-auto px-4 "
        >
          {review?.map((brands) => (
            <SwiperSlide key={brands._id}>
              <div className=" relative bg-green-500 text-white shadow-xl rounded-lg">
                <div className="avatar z top-2">
                  <div className=" w-4 md:w-12 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={brands.image} />
                  </div>
                </div>
                <h2 className="text-[14px] md:text-base  text-white py-2 ">
                  {brands.name}
                </h2>
                <div className="min-h-[200px] mt-1 ">
                  <Rating
                    emptySymbol={
                      <AiOutlineStar className=" text-lg md:text-2xl text-yellow-400" />
                    }
                    fullSymbol={
                      <AiFillStar className=" text-lg md:text-2xl text-yellow-400" />
                    }
                    initialRating={brands.rating}
                    readonly
                  />

                  <h2 className=" text-[14px]  md:text-base   p-4 review text-white  ">
                    {brands.review}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
