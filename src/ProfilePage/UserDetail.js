import React from "react";

const UserDetail = ({ userDataResult }) => {
  return (
    <div className="pb-6 space-y-3 ">
      <div className="space-y-5 content-evenly">
        <img
          className="rounded-full w-[50%] h-[50%] mx-auto"
          src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
          alt="ProfilePicture"
        />
        <h2 className="font-bold text-center text-4xl">Leanne Graham</h2>
      </div>
      <h3 className="text-slate-400 justify-evenly">
        Username:<span className="text-black pl-3">Bret</span>
      </h3>
      <h3>
        email:
        <span className="text-black pl-3">Sincere@gmail.bret</span>
      </h3>
      <h3>
        Phone:<span className="text-black pl-3">7894561230</span>
      </h3>
      <h3>
        Website:
        <span className="text-black pl-3">lennegrahm.com</span>
      </h3>
    </div>
  );
};

export default UserDetail;
