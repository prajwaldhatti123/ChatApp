import {
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Avatar,
  Stack,
  MenuItem,
  Menu,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useContext, useState } from "react";
import { chatContext } from "../../context/ContextApi";
import { AccountCircle, Logout, Settings } from "@mui/icons-material";
import Chats from "../../pages/Chats";

interface propsTypes {
  chatClick: () => number;
}

const ChatsBar = ({ chatClick }: propsTypes) => {
  const [AnchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const chatsArray = useContext(chatContext);
  const open = Boolean(AnchorEl);

  const handleThreeDotClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileClick = () => {};
  return (
    <>
      {/*  chat sidebar header */}
      <Grid item>
        <AppBar
          position="static"
          sx={{
            height: "5rem",
            justifyContent: "center",
            backgroundColor: "#47B5FF",
          }}
        >
          <Toolbar>
            {/* profile Avatar */}
            <IconButton
              aria-label=""
              edge="start"
              onClick={handleProfileClick}
              sx={{
                border: "0.1em solid black",
                borderRadius: "50%",
                padding: 0,
              }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                sx={{ height: 50, width: 50 }}
              ></Avatar>
            </IconButton>
            {/* stack for other icons like group , new chats , etc */}
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ marginLeft: "auto", marginRight: 0 }}
            >
              {/* groups icon */}
              <IconButton aria-label="groups" sx={{ fontSize: "1rem" }}>
                <GroupsIcon sx={{ fontSize: 40, color: "white" }}></GroupsIcon>
              </IconButton>

              {/* add icon */}
              <IconButton aria-label="groups" sx={{ fontSize: "1rem" }}>
                <AddBoxIcon sx={{ fontSize: 40, color: "white" }}></AddBoxIcon>
              </IconButton>
              {/* three dot menu icon */}
              <IconButton
                aria-label="groups"
                id="menu"
                aria-controls={open ? "menu-profile" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleThreeDotClick}
              >
                <MoreVertIcon
                  sx={{ fontSize: 40, color: "white" }}
                ></MoreVertIcon>
              </IconButton>
              <Menu
                id="menu-profile"
                aria-labelledby="profile-button"
                open={open}
                anchorEl={AnchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ padding: 1 }}
                keepMounted
              >
                <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
                  {" "}
                  <IconButton aria-label="profile-icon-button">
                    <AccountCircle></AccountCircle>
                  </IconButton>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ padding: 0, mr: 0.5 }}>
                  <IconButton aria-label="NewGroup-icon-button">
                    <GroupsIcon></GroupsIcon>
                  </IconButton>
                  New Group
                </MenuItem>

                <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
                  <IconButton aria-label="settings-icon-button">
                    <Settings></Settings>
                  </IconButton>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
                  <IconButton aria-label="logout-icon-button">
                    <Logout></Logout>
                  </IconButton>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </AppBar>
      </Grid>

      {/* side bar chat */}
      <Grid
        item
        sx={{
          overflowY: "auto",
          height: "calc(100vh - 5rem)",
          "&::-webkit-scrollbar": { width: "0.5em" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
          },
        }}
      >
        <Chats chats={chatsArray} chatClick={chatClick}></Chats>
      </Grid>
    </>
  );
};

export default ChatsBar;
