import React, { useState } from "react";

// components
import "./styles/Chat.css";

// other
import ChatIcon from "@material-ui/icons/Chat";

const Chat = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <div className="chat__modal">
          <div className="chat__title">
            <h1>live chat</h1>
          </div>
        </div>
      )}
      <div className="chat">
        <ChatIcon onClick={toggleOpen} />
      </div>
    </>
  );
};

export default Chat;
