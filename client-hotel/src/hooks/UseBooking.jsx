import { useQuery } from "@tanstack/react-query";

const UseBooking = (user) => {
  // console.log("rajus", user.email);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const data = fetch(
        `https://server-hotel-five.vercel.app/booking?email=${user?.email}`,
        {
          credentials: "include",
        }
      );
      return (await data).json();
    },
  });

  // console.log("rajus", data);

  return { data, isLoading, refetch };
};

export default UseBooking;
