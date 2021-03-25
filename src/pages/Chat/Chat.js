import React, { useState, useEffect } from "react";

import { doing, about } from "../../data/Actions";
import { InputChat } from "./InputChat/InputChat";
import { UserItem } from "./UserItem/UserItem";
import { CatItem } from "./CatItem/CatItem";
import Select from "./Select/Select";
import "./Chat.css";

const Chat = () => {
  let idCounter = 0;

  const [msg, setMsg] = useState({
    id: idCounter,
    emitter: "User",
    msg: "",
  });
  const [openSelect, setOpenSelect] = useState(false);
  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Cat",
      msg: ["Hola!", "Como es tu nombre?"],
    },
  ]);

  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => {
        firstResponse(msg.msg);
      }, 500);

      setMsg({ ...msg, msg: "" });

      setTimeout(() => {
        setOpenSelect(true);
      }, 600);
    }
  }, [chat]);

  function getMeMessage(value) {
    idCounter = idCounter + 1;

    setMsg({
      id: idCounter,
      emitter: "User",
      msg: value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();

    setChat([...chat, msg]);
  }

  function firstResponse(name) {
    const newChat = {
      id: idCounter + 2,
      emitter: "Cat",
      msg: [
        "¡Mucho gusto, " + name + "!",
        "Mi nombre es Sam y estoy en desarrollo aún",
        "Eso quiere decir que aún no estoy preparado para tus preguntas específicas 😿",
        "¡Lo que no significa que no podamos interactuar! ☺",
        "Haceme una preguntar de la lista, y con gusto respondo",
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  const [interactions, setInteractions] = useState([]);

  const handleSelectedActions = (value) => {
    let result = "";

    switch (value) {
      case "doing":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "about":
        result = about[Math.floor(Math.random() * about.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }

        break;

      default:
        console.log("No hay valores");
        return;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [interactions]);

  function scrollToBottom() {
    const chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
  }

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div id="chat" className="chatbot-chat-container-body">
            {chat.map((chat, index) =>
              chat.emitter === "Cat" ? (
                <CatItem text={chat.msg} key={index} />
              ) : (
                <UserItem text={chat.msg} key={index} />
              )
            )}
            {openSelect && (
              <Select handleSelectedActions={handleSelectedActions} />
            )}
            {interactions.length > 0 &&
              interactions.map((interaction, i) => (
                <div key={i}>
                  <CatItem text={interaction} />
                  <Select handleSelectedActions={handleSelectedActions} />
                </div>
              ))}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              msg={msg}
              getMeMessage={getMeMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
