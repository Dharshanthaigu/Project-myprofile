import React from "react";

const Sidebar = () => {
  return (
    <div className="pt-52 pl-24 border bg-blue-500 rounded-lg  space-y-9 border-slate-400 w-80 h-[120%] text-3xl">
      <h3 className="border-b-2">
        Profile <span className="pl-[85px] text-slate-300">{">"}</span>
      </h3>
      <h3 className="border-b-2">
        Posts<span className="pl-[110px] text-slate-300">{">"}</span>
      </h3>
      <h3 className="border-b-2">
        Gallery<span className="pl-[85px] text-slate-300">{">"}</span>
      </h3>
      <h3 className="border-b-2">
        ToDo<span className="pl-[100px] text-slate-300">{">"}</span>
      </h3>
    </div>
  );
};

export default Sidebar;
