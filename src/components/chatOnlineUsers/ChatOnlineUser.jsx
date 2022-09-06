import { Avatar } from "@mui/material";
import "./chatOnlineUser.scss";

const ChatOnlineUser = () => {
  return (
    <div className="chat-online-user">
      <div className="user">
        <div className="img-container">
          <Avatar
            className="conversation-img"
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/26.jpg "
            sx={{ width: 32, height: 32 }}
          />
          <span className="online-badge"></span>
        </div>
        <div className="user-name">Joe</div>
      </div>
    </div>
  );
};

export default ChatOnlineUser;
