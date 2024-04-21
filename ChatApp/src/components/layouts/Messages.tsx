import React, { useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  AttachFile,
  // Chat,
  KeyboardVoice,
  SendSharp,
} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface propsTypes {
  backClick: () => void;
}

const Messages: React.FC<propsTypes> = ({ backClick }) => {
  const profile =
    "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  const name = "User Unknown";
  const [chatAnchorEl, setChatAnchorEl] = useState<HTMLElement | null>(null);
  const openChatMenu = Boolean(chatAnchorEl);
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const handleChatMenuClose = () => {
    setChatAnchorEl(null);
  };
  const handleChatProfileClick = () => {};
  const handleChatMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setChatAnchorEl(event.currentTarget);
  };
  return (
    <>
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
              {!isDesktop && (
                <IconButton aria-label="goBackToChats" onClick={backClick}>
                  <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
              )}
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
            // flex: " 1  1",
            justifyContent: "center",
            backgroundColor: "#DFF5FF",
          }}
        >
          <Toolbar>
            {/* emoji icon button */}
            <IconButton aria-label="">
              <AddReactionIcon
                sx={{
                  color: "black",
                  fontSize: 40,
                  mr: 2,
                  opacity: 0.7,
                  // flex: " 1  1",
                }}
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
                // flex: "1 1",/ // Allow the input to grow and shrink
                minWidth: "0px",
                width: "50%", // Ensure the input can shrink to 0 width
                maxWidth: "60%", // Set maximum width
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
    </>
  );
};

export default Messages;
