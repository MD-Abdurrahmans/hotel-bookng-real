import UseAuth from "../../hooks/UseAuth";
import Lottie from "lottie-react";
import loginLogo from "../../assets/signup.json";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const { loginUser, googleLogin } = UseAuth();
  const gotTo = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    loginUser(email, password).then((result) => {
      console.log(result.user);
      if (result.user.email) {
        gotTo("/");
        console.log(user);
      }
    });

    // console.log(user);
  };

  // googel

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      if (result.user.email) {
        gotTo("/");
      }
    });
  };

  return (
    <div>
      <div className=" hero min-h-screen  max-w-[1200px] mx-auto px-4 ">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
          <div className="flex-1">
            {/* <img
              src="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            /> */}

            <Lottie animationData={loginLogo}></Lottie>
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-bold pb-4">Login now!</h1>
            <form onSubmit={handleLogin} className="w-full">
              <div className="form-control ">
                {/* <label className="label">
                  <span className="label-text">Your Email</span>
                </label> */}
                <label className="input-group">
                  <span className="bg-transparent font-bold">Email</span>

                  <input
                    type="email"
                    placeholder="info@site.com"
                    className="p-2 w-full border-b-2 bg-transparent border-green-500 "
                    name="email"
                  />
                </label>
              </div>

              <div className="form-control  ">
                {/* <label className="label">
                  <span className="label-text">Your Password</span>
                </label> */}
                <label className="input-group my-4">
                  <span className="bg-transparent font-bold">Password</span>
                  <input
                    type="text"
                    placeholder="Your Password"
                    className="p-2 w-full border-b-2 bg-transparent border-green-500 "
                    name="password"
                  />
                </label>
              </div>

              <div className="py-2">
                <p>
                  New here ? please
                  <Link className="text-bold pl-2 text-green-500" to="/signup">
                    Register
                  </Link>
                </p>
              </div>
              <div className="mt-4 w-full ">
                <input
                  type="submit"
                  className="btn  bg-green-500 text-white  w-full "
                  value="Login "
                  name=""
                  id=""
                />
              </div>

              <p className="text-center font-semibold mt-4 text-2xl ">
                or <span className="text-green-500">With</span>
              </p>

              <div>
                <button onClick={handleGoogleLogin} className="btn ">
                  <AiOutlineGoogle className="text-3xl text-green-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
