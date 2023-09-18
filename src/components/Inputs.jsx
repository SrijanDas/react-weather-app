import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    // console.log("selectedUnit", selectedUnit)
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
    setCity("")
  };

  const handleLocationClick = () => {
    try {
      if (navigator.geolocation) {
        // toast.info("Fetching users location.");
        navigator.geolocation.getCurrentPosition((position) => {
          // toast.success("Location fetched!");
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
  
          setQuery({
            lat,
            lon,
          });
        });
      }
      
    } catch (error) {
      toast.error("Error fetching current location")
    }
  };

  return (
    <div className="w-full flex flex-row justify-center flex-wrap my-4 mb-0 md:my-6 gap-4 md:gap-0">
      <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <form onSubmit={e => {
          e.preventDefault();
          handleSearchClick()
        }}
        className="flex gap-4 w-full md:w-auto"
        >
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-md"
        />
       <button type="submit">
       <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
       </button>
        </form>
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className={`${units === "metric" ? "text-3xl" : "text-xl hover:scale-125"} text-white font-light transition-all ease-out`}
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-2 md:mx-1">|</p>
        <button
          name="imperial"
          className={`${units === "imperial" ? "text-3xl" : "text-xl hover:scale-125"} text-white font-light transition ease-out hover:scale-125`}
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
