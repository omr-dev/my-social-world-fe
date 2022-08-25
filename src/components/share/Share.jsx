import { Button, Modal, Typography, Box, Avatar } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

import "./share.scss";

export const Share = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <div className="modal-head">
            <Typography variant="span">Create New Post</Typography>
          </div>
          <form className="modal-body">
            <div className="modal-body-top">
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/46.jpg "
                sx={{ width: 46, height: 46 }}
              />
              <input
                type="text"
                className="modal-text-input"
                placeholder="Write a post..."
              />
              <Button type="submit" variant="contained" height="10px">
                Share
              </Button>
            </div>
            <div className="modal-buttons">
              <button>
                <AddAPhotoIcon />
                <b>Photo</b>
              </button>
              <button>
                <VideoLibraryIcon />
                <b>Video</b>
              </button>
              <button>
                <CalendarMonthIcon />
                <b>Event</b>
              </button>
              <button>
                <ShortTextIcon />
                <b>Text</b>
              </button>
            </div>
            <div className="share-img-wrapper">
              <img
                className="share-img"
                src="/public/images/post/2.jpg"
                alt=""
              />
              <CancelIcon className="cancel-icon" color="error" />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
