import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import Lottie from "lottie-react";

import signUpLogo from "../../assets/signup.json";

const Register = () => {
  const { createUser, UpdateUserProfile } = UseAuth();

  const gotTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;
    const user = { name, email, password };
    createUser(email, password).then((result) => {
      if (result.user?.email) {
        Swal.fire({
          title: "LoggedIn!",
          text: "Successfully LoggedIn!",
          icon: "success",
        });
        gotTo("/");
      }
      console.log(result.user);
      if (result.user) {
        UpdateUserProfile(name, photoURL).then((res) => {
          console.log(res);
        });
      }
    });
    console.log(user);
  };

  return (
    <div className=" hero min-h-screen  max-w-[1200px] mx-auto px-4 ">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <div className="flex-1">
          {/* <img
            src="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          /> */}

          <Lottie animationData={signUpLogo}></Lottie>
        </div>

        <div className="flex-1">
          <h1 className="text-lg md:text-5xl font-bold pb-4">Register now!</h1>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="form-control ">
              {/* <label className="label">
                <span className="label-text bg-transparent">Your Name</span>
              </label> */}
              <label className="input-group">
                <span className="bg-transparent font-bold">name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 w-full border-b-2 bg-transparent border-green-500 "
                  name="name"
                  required
                />
              </label>
            </div>

            {/* photoUrl */}

            <div className="form-control ">
              {/* <label className="label">
                <span className="label-text">Your ImageUrl</span>
              </label> */}
              <label className="input-group">
                <span className="bg-transparent font-bold">ImageUrl</span>
                <input
                  type="text"
                  placeholder="Your Image"
                  className="p-2 w-full border-b-2 bg-transparent border-green-500 "
                  name="photoUrl"
                  required
                />
              </label>
            </div>

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
                  required
                />
              </label>
            </div>

            <div className="form-control ">
              {/* <label className="label">
                <span className="label-text">Your Password</span>
              </label> */}
              <label className="input-group">
                <span className="bg-transparent font-bold">Password</span>
                <input
                  type="text"
                  placeholder="Your Password"
                  className="p-2 w-full border-b-2 bg-transparent border-green-500 "
                  name="password"
                  required
                />
              </label>
            </div>

            <p className="py-2">
              Already have an account?{" "}
              <Link className="font-bold text-green-500" to="/login">
                Login
              </Link>{" "}
            </p>
            <div className="mt-4 w-full">
              <input
                type="submit"
                className="btn w-full  bg-green-500 text-white"
                value="Register "
                name=""
                id=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
