import { Avatar, Button } from "@mui/material";
import ChatOnlineUser from "../../components/chatOnlineUsers/ChatOnlineUser";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import "./messenger.scss";
const Messenger = () => {
  return (
    <div className="container">
      <div className="messenger">
        <div className="chat-menu">
          <div className="wrapper chat-menu-wrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            <div className="conversations">
              <Conversation />
            </div>
          </div>
        </div>
        <div className="chat-box">
          <div className="wrapper chat-box-wrapper">
            <div className="chat-box-top">
              <div>
                <Message />
              </div>
            </div>
            <div className="chat-box-bottom">
              <textarea
                className="chat-message-input"
                placeholder="Write something..."
              ></textarea>
              <Button
                color="success"
                variant="contained"
                className="chat-submit-button"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className="chat-online-users">
          <div className="wrapper chat-online-users-wrapper">
            <h4>Online Users</h4>

            <ChatOnlineUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
