import React from "react";

const Company = () => {
  return (
    <div>
      <h1 className="text-4xl text-slate-300">Company</h1>
      <div className=" text-slate-300 space-y-3 text-3xl">
        <h3 className="pt-6 pl-6">
          Name : <span className="text-black pl-3"></span>
          Roman-course
        </h3>
        <h3 className="">
          catchphrase :{" "}
          <span className="text-black text-3xl pl-3">
            Multilayered client server
          </span>
        </h3>
        <h3>
          bs:
          <span className="text-black text-3xl pl-3">
            harness real-time e-markets
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Company;
