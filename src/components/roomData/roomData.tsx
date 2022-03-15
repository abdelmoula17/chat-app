import { FC } from "react";
import "./roomData.css";
import onlineIcon from "../icons/onlineIcon.png";
const RoomData: FC<any> = ({ onlineUsers }) => {
  return (
    <div className="roomDataContainer">
      <div className="roomDataHeader">
        <h3>Online</h3>
      </div>
      <div className="roomDataUsers">
        <ul>
          {onlineUsers.map((user: any, i: number) => (
            <li key={i}>
              <img src={onlineIcon} alt="onlineIcon" />
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomData;
