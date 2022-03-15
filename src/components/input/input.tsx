import { FC } from "react";
import "./input.css";

const Input: FC<any> = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form" action="">
      <input
        className="input"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        send
      </button>
    </form>
  );
};

export default Input;
