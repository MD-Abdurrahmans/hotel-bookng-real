const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvb218ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Chose Your Favorite <span className="text-green-500"> Room</span>
            </h1>
            <p className="mb-5">
              How can I describe a beautiful room? How to Describe a Room in
              English - Man Writes I have put some examples below: I like the
              living room because it is usually quiet and I can just lie on the
              sofa and relax, read a book or listen to music. I like our living
              room
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
