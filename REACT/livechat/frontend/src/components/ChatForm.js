import { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../socketApi";
import styles from "./styles.module.css";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);

    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          className={styles.textInput}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
