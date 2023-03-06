import React from "react";

const Address = () => {
  return (
    <div>
      <h2 className="text-4xl text-slate-300">Address:</h2>
      <div className="p-6  text-slate-300 space-y-2 text-3xl">
        <h3>
          Street:
          <span className="text-black pl-3">Kulas Light</span>
        </h3>
        <h3>
          Suite :<span className="text-black pl-3">Apt 556</span>
        </h3>
        <h3>
          City :<span className="text-black pl-3">Gwenboorgh</span>
        </h3>
        <h3>
          ZipCode :<span className="text-black pl-3">99965-3345</span>
        </h3>
      </div>
    </div>
  );
};

export default Address;
