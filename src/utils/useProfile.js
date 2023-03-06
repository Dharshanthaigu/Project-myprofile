import { useState, useEffect } from "react";
import { FETCH_USER_DATA } from "../utils/Datalist";

const useProfile = (resId) => {
  const [userData, setUserData] = useState("");

  // const newData = userData.users?.filter((items) => items.id === resId);
  // console.log(newData);
  // setUserData(newData);

  useEffect(() => {
    getUserDetail();
  }, []);

  async function getUserDetail() {
    const data = await fetch(FETCH_USER_DATA);
    const json = await data.json();
    console.log(json);
    setUserData(json);
  }
  return userData;
};

export default useProfile;
