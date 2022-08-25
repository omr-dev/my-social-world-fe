import { Avatar, Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import GridOnIcon from "@mui/icons-material/GridOn";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./profile.scss";
import Post from "../../components/post/Post";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile-page">
        <div className="profile-head">
          <div className="head-left">
            <Avatar
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/men/46.jpg "
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="head-right">
            <div className="head-right-top">
              <span className="profile-username">username</span>
              <div className="right-top-buttons">
                <Button
                  variant="contained"
                  size="small"
                  className="edit-button"
                >
                  Edit
                </Button>
                <button>
                  <SettingsIcon />
                </button>
                <button>
                  <LogoutIcon color="error" />
                </button>
              </div>
            </div>
            <div className="head-right-center">
              <div className="posts-count">
                <b>4</b> posts
              </div>
              <div className="followers-count">
                <b>1</b> followers
              </div>
              <div className="followings-count">
                <b>3</b> followings
              </div>
            </div>
            <div className="head-right-bottom">
              <div className="full-name">
                <b>User Name</b>
              </div>
              <div className="bio">I am a Teacher</div>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-nav-tabs">
            <button className="active">
              <GridOnIcon />
              <span>POSTS</span>
            </button>
            <button>
              <VideoLibraryIcon />
              <span>VIDOES</span>
            </button>
            <button>
              <BookmarkAddIcon />
              <span>SAVE</span>
            </button>
            <button>
              <AccountBoxIcon />
              <span>TAGGED</span>
            </button>
          </div>
          <div className="profile-posts-grid">
            <div className="grid-post">
              <Post onlyImage />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon" />
                <b>4</b>
              </div>
            </div>
            <div className="grid-post">
              <Post onlyImage />

              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon" />
                <b>4</b>
              </div>
            </div>
            <div className="grid-post">
              <Post onlyImage />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon" />
                <b>4</b>
              </div>
            </div>
            <div className="grid-post">
              <Post onlyImage />
              <div className="like-icon-wrapper">
                <FavoriteIcon className="like-icon" />
                <b>4</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
