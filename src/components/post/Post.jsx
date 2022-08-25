import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./post.scss";

function Post({ onlyImage }) {
  return (
    <div className="post-wrapper">
      {!onlyImage && (
        <div className="post-header">
          <div className="post-header-left">
            <a href="/">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://randomuser.me/api/portraits/men/21.jpg"
              />
            </a>
            <a href="/" className="profile-user-name">
              username
            </a>
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizIcon />
            </button>
          </div>
        </div>
      )}
      <div className="post-image">
        <img src="/images/post/1.jpg" alt="Post Image" />
      </div>
      {!onlyImage && (
        <div className="post-bottom">
          <div className="post-like">
            <button>
              <FavoriteIcon className="post-like-icon active" />
            </button>
          </div>
          <span className="post-like-count">0 like</span>
          <div className="post-content">
            <a href="/" className="profile-user-name">
              username
            </a>
            <span className="post-text">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              repudiandae praesentium possimus dolores modi, reprehenderit rem
              alias libero ipsa minus?
            </span>
          </div>
          <div className="post-time">1 minutes before</div>
        </div>
      )}
    </div>
  );
}

export default Post;
