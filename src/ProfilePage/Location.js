import React from "react";

const Location = ({ userData }) => {
  return (
    <div>
      <div>
        <iframe id="map" className="w-[90%] h-[480px] rounded-lg"></iframe>
      </div>
      <span className="flex p-2 m-3 ">
        <h6 className="pr-3">Lat:-43.9509</h6>
        <h6>Long:34.4618</h6>
      </span>
    </div>
  );
};

export default Location;
