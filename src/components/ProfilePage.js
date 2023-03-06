import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProfileHead from "./ProfileHead";
import UserDetail from "../ProfilePage/UserDetail";
import Address from "../ProfilePage/Address";
import Location from "../ProfilePage/Location";
import Company from "../ProfilePage/Company";
import ChatBot from "./ChatBot";
import Chat from "./chat";
import { useParams } from "react-router-dom";

const ProfilePage = ({ userList }) => {
  const { resId } = useParams();
  const [userDataResult, setUserDataResulted] = useState([]);
  //console.log(resId);

  //console.log(useProfile());
  //const userData = useProfile()

  useEffect(() => {
    getData();
  }, [resId]);

  function getData() {
    let result = userList;
    //console.log("res", result.users);
    let userResult = result.users.filter((item) => item.id == resId);
    //console.log(userResult);
    setUserDataResulted(userResult);
  }

  useEffect(() => {
    const mapData = document.querySelector("#map");
    const lat = -43.9509;
    const long = 34.4618;
    mapData.src = `https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`;
  });

  return (
    <>
      <div className="grid grid-cols-9 divide-x-0 p-10">
        <div id="fristcolumn" className="w-10 col-span-2 pt-9">
          <Sidebar />
        </div>
        <div id="secondcolumn" className="col-span-7">
          <div className="grid grid-rows-1 divide-y-2">
            <div id="firstrow" className="p-3">
              <ProfileHead />
            </div>
            <div id="secondrow">
              <div
                id="secondcol_secondrow"
                className="grid grid-cols-4 divide-x-2"
              >
                <div id="secondcolumn_firstcol" className="col-span-1">
                  <div className="p-10 pb-15 text-3xl pl-2 ml-2 grid grid-rows-1 divide-y-2">
                    <UserDetail />
                    <Company />
                  </div>
                </div>
                <div
                  id="secondcolumn_secondcol"
                  className=" text-xl col-span-3"
                >
                  <Address />
                  <Location />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-wrap">
        <ChatBot userList={userList} />
        <Chat />
      </div>
    </>
  );
};

export default ProfilePage;
