import Account from "./Account";
import ChatBot from "./ChatBot";
import Chat from "./chat";
import { Link } from "react-router-dom";

const LandingPage = ({ userList }) => {
  return (
    <>
      <div className="px-[620px] p-32">
        <div className="w-[680px] h-[600px] ml-2 p-2 border border-slate-200 bg-slate-50 rounded-lg overflow-y-auto">
          {/* Head of the account     */}
          <h1 className="text-3xl text-center border-b-2 p-5 shadow-slate-600 h-28">
            Select an account
          </h1>
          {/* Have add the map to access all the user data  */}
          {userList.users?.map((userlist) => {
            return (
              <Link to={"/ProfilePage/" + userlist.id} key={userlist.id}>
                <Account {...userlist} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex-wrap">
        <ChatBot userList={userList} />
        <Chat />
      </div>
    </>
  );
};

export default LandingPage;
