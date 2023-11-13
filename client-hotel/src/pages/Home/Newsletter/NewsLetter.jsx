const NewsLetter = () => {
  return (
    <div
      className=" hero  hero-overlay    mb-14  "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className=" md:max-w-[800px] text-white mx-auto w-full px-4 my-8 py-4   ">
        <h1 className="text-4xl text-center underline logo ">
          Subscribe to Our Newsletter
        </h1>
        <p className=" py-6 ">
          Stay in the know and never miss an update! Sign up for our newsletter
          to receive the latest news, special offers, and exclusive content
          directly in your inbox. Join our community of [Your Niche/Industry]
          enthusiasts and be the first to discover:
        </p>
        <div className="w-full">
          <input type="text" className="border p-[10px] w-full md:w-3/4 " />
          <input
            type="submit"
            placeholder="Enter Your Email"
            className="btn border-0 rounded-none bg-green-500 text-white "
            value="SignUp"
          />
        </div>
        <p className="pt-5">
          <input type="checkbox" name="" className="mr-4   " id="" />
          By subscribing, you agree to our [Privacy Policy] and [Terms &
          Conditions]. We promise not to spam you and you can unsubscribe at any
          time.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
