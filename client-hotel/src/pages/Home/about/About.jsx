import UseQuery from "../../../hooks/UseQuery";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const About = () => {
  const { data } = UseQuery();

  // console.log("about", data?.slice(0, 4));
  return (
    <div id="about" className="max-w-[1200px] mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row md:items-center ">
        <div
          data-aos="fade-up-right"
          data-aos-duration="2000"
          className="flex-1"
        >
          <img src={data?.slice(0, 4)[3].image2} alt="" />
        </div>
        <div className="flex-1 ">
          <h2 className="font-bold text-2xl">Memorable Place</h2>

          <h1 className="md:text-5xl logo">
            <span className="text-green-500 ">Most Safe</span> & Rated Hotel In
            London.
          </h1>
          <p className="leading-9 pt-7">
            Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque.
            Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida
            nibh, quis posuere felis. In commodo mi lectus, Integer ligula
            lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
            Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque.
            Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida
            nibh, quis posuere felis. In commodo mi lectus, Integer ligula
            lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
          </p>

          <button className="btn">ReadMore</button>
        </div>
      </div>
    </div>
  );
};

export default About;
