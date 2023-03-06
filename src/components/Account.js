import React from "react";

//destructimg the name and profilepicture
const Account = ({ name, profilepicture }) => {
  return (
    <div className="text-3xl h-[80px] border-b-2  border-slate-300 p-2">
      {/* call the profilepicture */}
      <div className="menubar flex items-center pb-3">
        <img
          src={profilepicture}
          alt="profilePicture"
          className="w-12 h-12 rounded-full"
        />
        <h4 className="p-3">{name}</h4>
      </div>
    </div>
  );
};

export default Account;
