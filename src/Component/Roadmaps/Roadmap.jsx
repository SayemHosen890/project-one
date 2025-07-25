
import React from 'react';
import Road from "../../assets/road.png"

const Roadmap = () => {
  return (
    <div className="flex justify-center items-center w-full mt-20 mb-10">
      <img src={Road} alt="Logo" className="h-300 w-full px-30" />
    </div>
  );
};

export default Roadmap;