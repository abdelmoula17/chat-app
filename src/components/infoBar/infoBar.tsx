import "./infoBar.css";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";
import { FC } from "react";
type roomProps = {
  room: string | any;
};
const InfoBar: FC<roomProps> = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online Img" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="closeImg" />
        </a>
      </div>
    </div>
  );
};
export default InfoBar;
