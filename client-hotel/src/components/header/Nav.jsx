import { Link, NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import UseQuery from "../../hooks/UseQuery";

const Nav = () => {
  const { user, logout } = UseAuth();
  const { refetch } = UseQuery();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/myBookings">MyBookings</NavLink>
      </li>

      <li>
        <NavLink to="/aboutus">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
    </>
  );

  // handleLogout
  const goTo = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout().then(() => {
          Swal.fire({
            title: "Logout!",
            text: "LogOut successfully.",
            icon: "success",
          });
          refetch();
          goTo("/login");
        });
      }
    });
  };

  return (
    <div className="bg-green-500 text-white ">
      <div className="navbar max-w-[1200px] mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  text-black   rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn hover:bg-transparent text-green-800   bg-transparent border-0 normal-case text-xl">
            <img
              src="https://i.ibb.co/R4B1ndC/summur-logo.png"
              className="w-[100px] "
              alt=""
            />
            <span className="logo       ">Hotel</span>{" "}
            <span className="logo ">Bee</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* avatar */}
        <div className="navbar-end">
          {!user && (
            <Link to="/signUp">
              <button className="btn btn-sm">SignUp</button>
            </Link>
          )}

          <div className="dropdown dropdown-end text-black">
            {user?.email ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            ) : (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="data:image/png;base64,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" />
                </div>
              </label>
            )}
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {user && (
                <div className="cursor-pointer" onClick={handleLogout}>
                  <h2>Logout</h2>
                </div>
              )}
              {!user && (
                <Link to="/login">
                  <div>
                    <h2>Login</h2>
                  </div>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
