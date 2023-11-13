import { FaWifi, FaCar, FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseQuery from "../../../hooks/UseQuery";
// import { FaWifi } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const FeaturesRoom = () => {
  AOS.init();

  const { data } = UseQuery();

  // console.log("feMain", data);

  const fRoom = data?.slice(4, 9)?.map((fe) => fe);
  // console.log("feFetch", fRoom);
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div data-aos="fade-left" className="text-center">
        <h1 className="md:text-5xl logo ">
          Featured Rooms <span className="text-green-500">& Suites</span>
        </h1>
        <p className="max-w-[700px] mx-auto my-7">
          Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
          dolor eget neque viverra, sed interdum metus interdum. Cras lobortis
          pulvinar dolor, sit amet ullamcorper dolor iaculis vel
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* cards */}
        {fRoom?.map((room) => (
          <>
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              className="card  bg-base-100 shadow-xl relative    overflow-hidden  hover:border-r-8  hover:border-green-500 border-r-8 border-b-8  "
            >
              <figure>
                <img
                  src={room?.image2}
                  className="max-h-[200px] w-full"
                  alt="Rooms"
                />
              </figure>
              {/* price and booking button */}
              <div className="bg-slate-500 bg-opacity-60 max-w-[200px] md:absolute w-full left-20 top-1/4 text-white p-4 text-center  h-20">
                <h1 className="font-bold">${room?.price}/night</h1>
                <button className="font-semibold bg-green-500 text-white btn btn-xs ">
                  <Link to={`/roomDetails/${room?._id}`}>
                    <p>BookNow</p>
                  </Link>
                </button>
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {room?.title}
                  <div className="badge badge-secondary"></div>
                </h2>
                <p>{room?.description.slice(0, 100)}</p>
                <div className="card-actions justify-center pt-4  ">
                  <FaWifi></FaWifi> <FaCar /> <FaCoffee />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturesRoom;
