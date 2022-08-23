import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import "./logo.scss";
export const Logo = () => {
  return (
    <a href="/" style={{ display: "flex" }}>
      <GroupsIcon />
      <span>My Social World</span>
    </a>
  );
};
