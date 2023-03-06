import React from "react";

const ProfileHead = ({ userDataResult }) => {
  return (
    <div className="flex justify-between pb-5">
      <h3 className="text-3xl">Profile</h3>
      <div className="menubar flex justify-evenly items-center">
        <img
          src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
          alt="profilePicture"
          className="w-12 h-12 rounded-full"
        />
        <h4 className="p-3">Leanne Graham</h4>
      </div>
    </div>
  );
};

export default ProfileHead;
