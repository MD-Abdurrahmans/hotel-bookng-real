import { createContext, useEffect, useState } from "react";
import UseQuery from "../../hooks/UseQuery";
import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import axios from "axios";

const Rooms = () => {
  const [filter, setFilter] = useState();
  const [filters, setFilters] = useState();
  const { data, isLoading, refetch } = UseQuery(filter);
  useEffect(() => {
    axios
      .get(
        `https://server-hotel-five.vercel.app/services?sortField=price&sortOrder=${filter}`
      )
      .then((res) => {
        setFilters(res.data);
      });
  }, [filter]);
  // console.log("ariauy", data);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen absolute w-full h-full">
        <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-green-500 "></div>
        <h2 className="text-3xl font-black text-green-500 pl-2">LOADING</h2>
      </div>
    );
  }

  // handle filter

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    // console.log("h", filter);
  };

  return (
    <>
      <Banner />
      <div className="max-w-[1200px] mx-auto px-4">
        <Helmet>
          <title>Rooms</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <h1 className="md:text-5xl text-center p-5">Our Room</h1>
        <div>
          <form className="my-5">
            <select
              value={filter}
              className="btn border-0 logo btn-sm bg-green-500 text-white "
              onChange={handleFilter}
              name=""
              id=""
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filters &&
            filters?.map((service) => (
              <RoomCard key={service._id} service={service}></RoomCard>
            ))}
          {!filters &&
            data?.map((service) => (
              <RoomCard key={service._id} service={service}></RoomCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
