import React from "react";
import "./InputChat.css";

export const InputChat = ({msg, getMeMessage, sendMessage }) => {
  return (
    <form
      className="chatbot-chat-input-container"
      onSubmit={(e) => sendMessage(e)}
    >
      <input
        type="text"
        placeholder="Escribí tu nombre"
        value={msg.msg}
        onChange={(e) => getMeMessage(e.target.value)}
      />
      <button type="submit" />
    </form>
  );
};
