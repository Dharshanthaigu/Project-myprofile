import React from "react";

const ChatMessage = (props) => {
  return (
    <div className={`flex  pt-3 ${props.user && "justify-end"}`}>
      {props.user ? (
        <span className="flex border  bg-blue-200 border-gray-500  rounded-lg">
          <span className="pr-4 text-lg">{props.message}</span>
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </span>
      ) : (
        <span className="flex border bg-gray-300 w-44 border-gray-400  rounded-lg">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="pl-2 text-lg">{props.message}</span>
        </span>
      )}
    </div>
  );
};

export default ChatMessage;
