import React from "react";
import Account from "./Account";

const ChatBot = ({ userList }) => {
  return (
    <div>
      <div className="float-right pr-4">
        <div className="w-96 h-96 ml-2 border border-slate-200 bg-white overflow-y-auto rounded-lg">
          <div className=" flex justify-between  bg-blue-500 border-b-2 h-20 rounded-lg">
            <div className="flex pt-4">
              <svg
                className="h-9 w-9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
                <line x1="12" y1="11" x2="12" y2="11.01" />{" "}
                <line x1="8" y1="11" x2="8" y2="11.01" />{" "}
                <line x1="16" y1="11" x2="16" y2="11.01" />
              </svg>
              <h2 className="text-3xl pl-2">Chat</h2>
            </div>
            <button className="w-7 h-7 border-none pt-4">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {" "}
                <polyline points="7 13 12 18 17 13" />{" "}
                <polyline points="7 6 12 11 17 6" />
              </svg>
            </button>
          </div>
          {userList?.users?.map((userlist) => {
            return <Account {...userlist} key={userlist.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
