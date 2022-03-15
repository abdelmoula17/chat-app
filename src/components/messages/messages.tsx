import { FC } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./message/message";
import "./messages.css";
const Messages: FC<any> = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message: any, i: any) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};
export default Messages;
