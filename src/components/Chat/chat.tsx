import { useState, useEffect, KeyboardEvent } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import "./Chat.css";
import InfoBar from "../infoBar/infoBar";
import Input from "../input/input";
import Messages from "../messages/messages";
import RoomData from "../roomData/roomData";
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
const Chat = () => {
  const [name, setName] = useState<string | null>("");
  const [room, setRoom] = useState<string | null>("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  let location = useLocation();
  const ENDPOINT = "https://chat-react-project.herokuapp.com/";
  const [searchParams, setSearchParams] = useSearchParams({});
  //work when componenent render
  useEffect(() => {
    const name = searchParams.get("name");
    const room = searchParams.get("room");
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room });
    socket.on("roomData", ({ room, users }) => {
      setOnlineUsers(users);
    });
  }, [ENDPOINT, location]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  // function for sending messages
  const sendMessage = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <RoomData onlineUsers={onlineUsers} />
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        {/* <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        /> */}
      </div>
    </div>
  );
};
export default Chat;
