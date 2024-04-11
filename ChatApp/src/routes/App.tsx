import {
  AppBar,
  Grid,
  Toolbar,
  IconButton,
  Avatar,
  Stack,
  MenuItem,
  Menu,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useContext, useState } from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
// import ContextProvider from "../context/ContextApi";
import {
  AccountCircle,
  AttachFile,
  // Chat,
  KeyboardVoice,
  Logout,
  SendSharp,
  Settings,
} from "@mui/icons-material";
import Chats from "../pages/Chats";
import { chatContext } from "../context/ContextApi";
// import Loaders from "../components/layouts/Loaders";

// import Chats from "../pages/Chats";
// import { Outlet } from "react-router-dom";
const App = () => {
  const [AnchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [chatAnchorEl, setChatAnchorEl] = useState<HTMLElement | null>(null);
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");

  //c random data
  const open = Boolean(AnchorEl);
  const openChatMenu = Boolean(chatAnchorEl);
  // const chatsArray = chatsLoader(30);
  const chatsArray = useContext(chatContext);

  const handleProfileClick = () => {};
  const handleChatProfileClick = () => {};
  const handleChatMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setChatAnchorEl(event.currentTarget);
  };
  const chatClick = (img: string, ide: string) => {
    setProfile(img);
    setName(ide);
  };
  const handleThreeDotClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChatMenuClose = () => {
    setChatAnchorEl(null);
  };
  return (
    //c complete screen grid
    // <ContextProvider>
    <Grid sx={{ height: "100vh", display: "flex" }}>
      {/* sidebar grid */}
      <Grid
        item
        container
        sx={{
          // display: "flex",
          // flex: "0 0 auto",
          display: { xs: "block" },
          flexDirection: "column",
          borderRight: "1px solid black",
          height: "100vh", // Set a fixed height
          overflowY: "auto",
        }}
        xl={3}
        lg={4}
        // md={4}
        // sm={4}
        // xs={12}
      >
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
                  <GroupsIcon
                    sx={{ fontSize: 40, color: "white" }}
                  ></GroupsIcon>
                </IconButton>

                {/* add icon */}
                <IconButton aria-label="groups" sx={{ fontSize: "1rem" }}>
                  <AddBoxIcon
                    sx={{ fontSize: 40, color: "white" }}
                  ></AddBoxIcon>
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

        {/* sidebar chat */}
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
      </Grid>

      {/* chat grid */}
      <Grid
        item
        container
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
        }}
        xl={9}
        lg={8}
        md={8}
        sm={8}
        // xs={0}
      >
        {/* chat Header */}
        {profile ? (
          <Grid>
            <AppBar
              position="static"
              sx={{
                height: "5rem",
                backgroundColor: "#47B5FF",
                display: "flex",
                // alignItems: profile ? "start" : "center",
                justifyContent: "center",
              }}
            >
              <Toolbar>
                <IconButton
                  aria-label="chat-profile-icon"
                  onClick={handleChatProfileClick}
                  sx={{
                    border: "0.1em solid black",
                    borderRadius: "50%",
                    padding: 0,
                  }}
                >
                  <Avatar
                    src={
                      profile
                        ? profile
                        : "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    }
                    sx={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  ml={3}
                  sx={{ fontSize: "1.5rem", color: "black" }}
                  component={"div"}
                  flexGrow={1}
                >
                  {name}
                </Typography>
                <Stack direction={"row"} spacing={4} mr={0}>
                  {/* Menu Display Button */}
                  <IconButton
                    color="inherit"
                    id="profile-button"
                    aria-controls={openChatMenu ? "menu-profile" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openChatMenu ? "true" : undefined}
                    onClick={handleChatMenuClick}
                    sx={{ fontSize: "1.2rem" }}
                  >
                    <MoreVertIcon
                      sx={{ fontSize: "2.5rem", color: "black" }}
                    ></MoreVertIcon>
                  </IconButton>
                  <Menu
                    id="menu-profile"
                    aria-labelledby="profile-button"
                    open={openChatMenu}
                    anchorEl={chatAnchorEl}
                    onClose={handleChatMenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleChatMenuClose}>Login</MenuItem>
                    <MenuItem onClick={handleChatMenuClose}>Logout</MenuItem>
                    <MenuItem onClick={handleChatMenuClose}>Settings</MenuItem>
                  </Menu>
                </Stack>
              </Toolbar>
            </AppBar>
          </Grid>
        ) : (
          <Grid>
            <AppBar
              position="static"
              sx={{
                height: "5rem",
                backgroundColor: "#47B5FF",
                display: "flex",
                alignItems: profile ? "flex-start" : "center",
                justifyContent: "center",
              }}
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ marginLeft: "auto" }}
                >
                  select chats to see message
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
        )}

        {/* chat content */}
        <Grid
          container
          sx={{
            overflowY: "auto",
            flex: 1,
            backgroundImage:
              'url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")',
          }}
        ></Grid>

        {/* message */}
        <Grid
          sx={{
            top: "auto",
            bottom: 0,
            position: "fixed",
            width: "100%",
          }}
        >
          {/* Footer */}
          <AppBar
            position="static"
            sx={{
              height: "5rem",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#DFF5FF",
            }}
          >
            <Toolbar>
              {/* emoji icon button */}
              <IconButton aria-label="">
                <AddReactionIcon
                  sx={{ color: "black", fontSize: 40, mr: 2, opacity: 0.7 }}
                ></AddReactionIcon>
              </IconButton>

              {/* Attach file button */}
              <IconButton aria-label="">
                <AttachFile
                  sx={{ color: "black", fontSize: 40, mr: 2 }}
                ></AttachFile>
              </IconButton>

              {/* message textfield */}
              <InputBase
                type="text"
                placeholder="Type a message"
                sx={{
                  fontSize: 22,
                  flex: "1 1", // Allow the input to grow and shrink
                  minWidth: 0, // Ensure the input can shrink to 0 width
                  maxWidth: "65%", // Set maximum width
                  border: "1px solid black",
                  boxShadow: "1px 1px 10px #47B5FF",
                  borderRadius: 2,
                  padding: 1,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="send-button">
                      <SendSharp sx={{ fontSize: 30 }}></SendSharp>
                    </IconButton>
                  </InputAdornment>
                }
              ></InputBase>

              {/* Mic icon button */}
              <IconButton aria-label="">
                <KeyboardVoice
                  sx={{ color: "black", fontSize: 40 }}
                ></KeyboardVoice>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Grid>
    // </ContextProvider>
  );
};

export default App;
