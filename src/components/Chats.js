import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">UmaniChat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="c10ae3ef-5c49-4089-9340-d179396a1d75"
        userName="."
        userSecrect="."
      />
    </div>
  );
};

export default Chats;
