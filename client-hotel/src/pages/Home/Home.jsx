import { Helmet } from "react-helmet";
import NewsLetter from "./Newsletter/NewsLetter";
import About from "./about/About";
import FeaturesRoom from "./featuresRoom/FeaturesRoom";
import Gallery from "./gallery/Gallery";
import Slider from "./slider/Slider";
import Testimonial from "./testimonial/Testimonial";
/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> */

const Home = () => {
  return (
    <div className="space-y-20 bigtxt">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      {/* header slider */}
      <Slider />

      {/* gallery */}

      <Gallery />

      {/* about Us */}
      <About />

      {/* TESTIMONIALS */}
      <Testimonial />

      {/* Features Room */}

      <FeaturesRoom />

      {/* NewsLater SignUp */}

      <NewsLetter />
    </div>
  );
};

export default Home;
