import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Kolkata",
    },
    {
      id: 4,
      title: "Chennai",
    },
    {
      id: 5,
      title: "Bangalore",
    },
 
    
    
  ];

  return (
    <div className="flex items-center justify-start gap-4 py-1 px-1 overflow-y-scroll scrollbar-hide">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
