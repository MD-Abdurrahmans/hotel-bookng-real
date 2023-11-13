import { useQuery } from "@tanstack/react-query";

const UseQuery = (filter) => {
  // console.log("hello", filter);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      if (filter === undefined) {
        const data = fetch("https://server-hotel-five.vercel.app/services", {
          credentials: "include",
        });

        return (await data).json();
      }
      // const data = fetch("http://localhost:5000/services");

      const data = fetch(
        `https://server-hotel-five.vercel.app/services?sortField=price&sortOrder=${filter}`,
        { credentials: "include" }
      );

      return (await data).json();
    },
  });

  return { data, isLoading, refetch };
};

export default UseQuery;
