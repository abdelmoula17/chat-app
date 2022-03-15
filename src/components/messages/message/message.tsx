import { FC } from "react";
import "./message.css";

const Message: FC<any> = ({ message, name }) => {
  let sentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (message.user === name) {
    sentByCurrentUser = true;
  }
  return sentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName} </p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{message.text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText pl-10">{message.user}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
