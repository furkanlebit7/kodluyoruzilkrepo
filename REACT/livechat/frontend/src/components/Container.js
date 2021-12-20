import { useEffect } from "react";
import { useChat } from "../context/ChatContext";
import { init, loadInitialMessages, subscribeChat } from "../socketApi";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();

    loadInitialMessages((messages) => {
      setMessages(messages);
    });

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, []);
  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
