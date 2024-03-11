import React from "react";
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
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

interface Chat {
  sender: string;
  message: string;
  profilePhoto: string;
}
interface ChatListProps {
  chats: Chat[];
}
const Chats: React.FC<ChatListProps> = ({ chats }) => {
  console.log(chats);
  return (
    <Typography component={"div"} sx={{ ":hover": { cursor: "pointer" } }}>
      {chats.map((chat: Chat, index: number) => (
        <Grid key={index} width={"100%"}>
          <ListItem
            onClick={() => {
              console.log(chat.sender);
            }}
          >
            <ListItemAvatar>
              <Avatar src={chat.profilePhoto} alt={chat.sender} />{" "}
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
