import React, { useState } from "react";
import ChatMessage from "../components/ChatMessages";
import { Analyze } from "../utils/ChatReply";

const Chat = () => {
  const [message, setMessage] = useState([
    {
      message: "Hey! What's up",
    },
  ]);

  const [text, setText] = useState("");

  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = Analyze(text);
      list = [
        ...list,
        {
          message: reply,
        },
      ];
    } else {
      list = [
        ...list,
        {
          message: `Hi ${text}`,
        },
        {
          message: `How can i help you`,
        },
      ];
    }
    setMessage(list);
    setText("");
  };

  return (
    <div className="float-right border border-slate-400 rounded-lg overflow-y-auto">
      <div className="w-96 h-80 ml-2 bg-white overflow-y-auto rounded-lg">
        <div className="sticky flex justify-between bg-blue-500 border-b-2 h-20 rounded-lg">
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
        <span>
          {message.length > 0 &&
            message.map((data) => <ChatMessage {...data} key={data.id} />)}
        </span>
      </div>
      <div className="w-96 px-2 flex flex-wrap justify-between">
        <input
          className="border border-slate-500 w-[330px]"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button className="w-7 h-7 border-none" onClick={onSend}>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {" "}
            <line x1="22" y1="2" x2="11" y2="13" />{" "}
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
