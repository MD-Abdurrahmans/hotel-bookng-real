import { Helmet } from "react-helmet";
import UseBooking from "../../hooks/UseBooking";
import BookingCard from "./BookingCard";
import UseAuth from "../../hooks/UseAuth";

const Booking = () => {
  const { user } = UseAuth();
  const { data, isLoading, refetch } = UseBooking(user);
  // console.log("booking", data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen absolute w-full h-full">
        <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-green-500 "></div>
        <h2 className="text-3xl font-black text-green-500 pl-2">LOADING</h2>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>MyBooking</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div className="grid grid-cols-1 ">
        {data?.map((book) => (
          <BookingCard
            key={book._id}
            book={book}
            refetch={refetch}
          ></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default Booking;
