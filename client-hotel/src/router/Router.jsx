import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Rooms from "../pages/rooms/Rooms";
import RoomDetails from "../pages/rooms/RoomDetails";
import Booking from "../pages/myBooking/Booking";
import UpdateCart from "../pages/myBooking/UpdateCart";
import PrivateRoute from "../components/authProvider/private/PrivateRoute";
import Error from "../pages/404/Error";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs.JSX";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signUp",
        element: <Register />,
      },
      {
        path: "rooms",
        element: (
          <PrivateRoute>
            <Rooms />
          </PrivateRoute>
        ),
      },
      {
        path: "roomDetails/:id",
        element: <RoomDetails />,
      },
      {
        path: "aboutus",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },

      {
        path: "contactus",
        element: (
          <PrivateRoute>
            <ContactUs />
          </PrivateRoute>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "updateCart/:id",
        element: (
          <PrivateRoute>
            <UpdateCart />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
