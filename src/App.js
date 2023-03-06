import "./App.css";
import { useState, useEffect } from "react";
import { FETCH_USER_DATA } from "../src/utils/Datalist";
import LandingPage from "./components/Landingpage";
import ProfilePage from "./components/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [userList, setUserList] = useState([]);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage userList={userList} />,
    },
    {
      path: "/ProfilePage/:resId",
      element: <ProfilePage userList={userList} />,
    },
  ]);

  useEffect(() => {
    getUserDetail();
  }, []);

  async function getUserDetail() {
    const data = await fetch(FETCH_USER_DATA);
    const json = await data.json();
    setUserList(json);
  }
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
