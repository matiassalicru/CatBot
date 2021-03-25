import React from "react";
import "./InputChat.css";

export const InputChat = ({chat, msg, getMeMessage, sendMessage }) => {

  return (
    <form
      className="chatbot-chat-input-container"
      onSubmit={(e) => sendMessage(e)}
    >
      <input
        disabled={chat.length >= 3 ? true : false}
        type="text"
        placeholder={
          chat.length >= 3 ? "Ya no podes escribir..." : "Escribí tu nombre..."
        }
        value={msg.msg}
        onChange={(e) => getMeMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={chat.length >= 3 ? true : false} />
    </form>
  );
};
