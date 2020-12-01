import React, { useState } from "react";

// components
import "./styles/Chat.css";

// other
import { Button } from "@material-ui/core";
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
            <h2>coming soon</h2>
          </div>

          <div className="chat__close">
            <Button variant="contained" onClick={toggleOpen}>
              close
            </Button>
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
