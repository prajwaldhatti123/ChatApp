// import React, { useState } from "react";
import {
  //   List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
// import { Line } from "react-chartjs-2";
// import { Link } from "react-router-dom";

interface Chat {
  sender: string;
  message: string;
  profilePhoto: string;
}
interface identification {
  (profilePhoto: string, sender: string): void;
}
interface ChatListProps {
  chats: Chat[];
  chatClick: identification;
}
const Chats: React.FC<ChatListProps> = ({ chats, chatClick }) => {
  function handleChatClick(profilePhoto: string, sender: string): void {
    // console.log(sender);
    chatClick(profilePhoto, sender);
  }

  return (
    <Typography component={"div"} sx={{ ":hover": { cursor: "pointer" } }}>
      {chats.map((chat: Chat, index: number) => (
        <Grid
          key={index}
          width={"100%"}
          sx={{
            ":hover": { cursor: "pointer", backgroundColor: "#F0F0F0" },
            // backgroundColor: { selectedChatColor },
          }}
        >
          <ListItem
            onClick={(event) => {
              event.stopPropagation();
              // event.currentTarget.style.backgroundColor = selectedChatColor;
              handleChatClick(chat.profilePhoto, chat.sender);
            }}
          >
            <ListItemAvatar>
              <Avatar
                src={chat.profilePhoto}
                alt={chat.sender}
                sx={{ height: "3rem", width: "3rem", marginRight: "1rem" }}
              />{" "}
              {/* Display profile photo */}
            </ListItemAvatar>
            <ListItemText
              primary={chat.sender}
              secondary={chat.message}
              primaryTypographyProps={{
                sx: {
                  fontSize: "1.3rem",
                  marginRight: "1rem",
                  //   ":hover": { cursor: "pointer" },
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  fontSize: "0.8rem",
                  marginRight: "1rem",
                  //   ":hover": { cursor: "pointer" },
                },
              }}
            />
          </ListItem>
          {index !== chats.length - 1 && <Divider variant="middle" />}
        </Grid>
      ))}
    </Typography>
  );
};

export default Chats;
