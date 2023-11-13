import UseQuery from "../../../hooks/UseQuery";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const { data } = UseQuery();
  AOS.init();
  console.log("galary", data?.slice(0, 9));

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <h1 className="md:text-5xl text-center logo">
        OUR <span className="text-green-500 font-semibold"> GALLERY</span>
      </h1>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {/* <img
            src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          /> */}

          <iframe
            data-aos="fade-down"
            data-aos-duration="2000"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            width="560"
            height="315"
            src={data?.slice(0, 3)[0]?.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* {data?.map((d) => console.log("hi", d?.slice(0, 1)))} */}
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 1)[0]?.image1}
          />
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 2)[1]?.image1}
          />
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 3)[2]?.image1}
          />
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 4)[3]?.image1}
          />
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 5)[4]?.image1}
          />
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 6)[5]?.image1}
          />
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={data?.slice(0, 7)[6]?.image1}
          />
          {/* <img
            src={data?.slice(0, 8)[7]?.image1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          /> */}

          {/* <video src="https://www.youtube.com/embed/eEY50BOF0wM?si=JZSm49QKypVpR6Vx"></video> */}

          <iframe
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            width="560"
            height="315"
            src={data?.slice(0, 9)[3]?.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
