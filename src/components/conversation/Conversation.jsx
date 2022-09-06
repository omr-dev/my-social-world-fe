import { Avatar } from "@mui/material";
import "./conversation.scss";

const Conversation = () => {
  return (
  <div className="conversation">
  <Avatar className="conversation-img"
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/men/96.jpg "
              sx={{ width: 32, height: 32 }}
              
            />
            <div className="conversation-name">
              Alex  
            </div>
  </div>
  );
};

export default Conversation;
