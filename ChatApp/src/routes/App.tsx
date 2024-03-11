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
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import {
  AccountCircle,
  AttachFile,
  Chat,
  KeyboardVoice,
  Logout,
  SendSharp,
  Settings,
} from "@mui/icons-material";
import Chats from "../pages/Chats";

// import Chats from "../pages/Chats";
// import { Outlet } from "react-router-dom";
const App = () => {
  const [AnchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(AnchorEl);
  const chatsArray = chatsLoader(30);

  const handleProfileClick = () => {
    console.log("profile");
  };
  const handleThreeDotClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    //c complete screen grid
    <Grid sx={{ height: "100vh", display: "flex" }}>
      {/* sidebar grid */}
      <Grid
        container
        sx={{
          display: "flex",
          // flex: "0 0 auto",
          flexDirection: "column",
          borderRight: "1px solid black",
          height: "100vh", // Set a fixed height
          overflowY: "auto",
        }}
        xl={3}
        lg={4}
        md={4}
        sm={4}
        xs={12}
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
            "&::-webkit-scrollbar-thumb": { backgroundColor: "rgba(0,0,0,.2)" },
          }}
        >
          <Chats chats={chatsArray}></Chats>
        </Grid>
      </Grid>

      {/* chat grid */}
      <Grid
        container
        sx={{ display: "flex", flexDirection: "column" }}
        xl={9}
        lg={8}
        md={8}
        sm={8}
        xs={0}
      >
        {/* chat Header */}
        <Grid>
          <AppBar
            position="static"
            sx={{
              height: "5rem",
              backgroundColor: "#47B5FF",
            }}
          >
            <Toolbar></Toolbar>
          </AppBar>
        </Grid>

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
                  sx={{ color: "black", fontSize: 40, mr: 2 }}
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
                  width: "65%",
                  // "&:focus": {
                  //   outline: "none !important",
                  // },
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
                  sx={{ color: "black", fontSize: 40, mr: 2 }}
                ></KeyboardVoice>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Grid>
  );
};

// chat loader function
interface Chat {
  sender: string;
  message: string;
  profilePhoto: string;
}

export const chatsLoader = (count: number): Chat[] => {
  const getRandomProfilePhoto = (): string => {
    const randomId = Math.floor(Math.random() * 1000); // Generate a random ID between 0 and 999
    return `https://picsum.photos/id/${randomId}/100/100`; // Use Lorem Picsum API with random ID
  };
  const chats: Chat[] = [];
  for (let i = 0; i < count; i++) {
    const sender = `User ${i + 1}`;
    const message = `Message ${i + 1}`;
    const profilePhoto = getRandomProfilePhoto();
    chats.push({ sender, message, profilePhoto });
  }
  return chats;
};

export default App;
