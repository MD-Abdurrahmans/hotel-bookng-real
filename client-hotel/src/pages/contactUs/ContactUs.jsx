import Lottie from "lottie-react";
import about from "../../assets/contact.json";
import call from "../../assets/call.json";
const ContactUs = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row items-center">
        {/* image */}
        <div className="w-1/2">
          <Lottie animationData={about}></Lottie>
        </div>

        {/* text */}
        <div className="w-1/2">
          <div className="max-w-md space-y-5">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Contact Us</h1>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 md:w-10 h-5  md:h-10 mr-2 sm:mr-6 text-green-500 "
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 md:w-10 h-5  md:h-10 mr-2 sm:mr-6 text-green-500 "
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 md:w-10 h-5  md:h-10 mr-2 sm:mr-6 text-green-500 "
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@yuremail.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* get in touch  */}

      <div className="grid max-w-[1200px] bg-slate-300 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold leadi lg:text-5xl">
              TALk To Us
            </h2>
          </div>
          <div>
            <Lottie animationData={call}></Lottie>
          </div>
        </div>
        <form novalidate="" className="space-y-6">
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
