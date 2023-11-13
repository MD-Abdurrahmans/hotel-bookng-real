import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className="carousel bigtxt w-full h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90ZWwlMjByb29tfGVufDB8fDB8fHww"
            className="w-full"
          />

          <div className="absolute bg-black w-full h-full bg-opacity-40">
            <div className="max-w-md text-white absolute  top-1/3 left-1/3">
              <h1 className="mb-5 bigtxt text-3xl md:text-5xl font-bold">
                Book Your Stay with{" "}
                <span className="text-green-500">Hotel Bee</span>
              </h1>
              <p className="mb-5">
                A hotel is a commercial establishment that provides lodging,
                meals, and other services to guests, travelers, and tourists.
              </p>
              <Link to="/rooms">
                <button className="bg-green-500  p-2 ">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="absolute flex     left-1/2  bottom-4   ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG90ZWwlMjByb29tfGVufDB8fDB8fHww"
            className="w-full"
          />

          <div className="absolute bg-black w-full h-full bg-opacity-40">
            <div className="max-w-md text-white absolute  top-1/3 left-1/3">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Luxury Awaits Reserve Now
                <span className="text-green-500"> Paradise Place</span>
              </h1>
              <p className="mb-5">
                A hotel is a commercial establishment that provides lodging,
                meals, and other services to guests, travelers, and tourists.
              </p>
              <Link to="/rooms">
                <button className="bg-green-500  p-2 ">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="absolute flex     left-1/2  bottom-4   ">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG90ZWwlMjByb29tfGVufDB8fDB8fHww"
            className="w-full"
          />

          <div className="absolute bg-black w-full h-full bg-opacity-40">
            <div className="max-w-md text-white absolute  top-1/3 left-1/3">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Experience Comfort
                <span className="text-green-500"> and Convenience</span>
              </h1>
              <p className="mb-5">
                A hotel is a commercial establishment that provides lodging,
                meals, and other services to guests, travelers, and tourists.
              </p>
              <Link to="/rooms">
                <button className="bg-green-500  p-2 ">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="absolute flex     left-1/2  bottom-4   ">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full"
          />

          <div className="absolute bg-black w-full h-full bg-opacity-40">
            <div className="max-w-md text-white absolute  top-1/3 left-1/3">
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Book a Room, Make Memories
                <span className="text-green-500"> Your Life</span>
              </h1>
              <p className="mb-5">
                A hotel is a commercial establishment that provides lodging,
                meals, and other services to guests, travelers, and tourists.
              </p>
              <Link to="/rooms">
                <button className="bg-green-500  p-2 ">Get Started</button>
              </Link>
            </div>
          </div>

          <div className="absolute flex     left-1/2  bottom-4   ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
