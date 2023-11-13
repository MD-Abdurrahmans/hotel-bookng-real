import { Outlet } from "react-router-dom";
import Nav from "../../components/header/Nav";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div className="bigtxt">
      <Nav></Nav>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
