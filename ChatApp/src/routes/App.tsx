import { useState } from "react";
import ChatsBar from "../components/layouts/ChatsBar";
import Messages from "../components/layouts/Messages";
import { Grid, useMediaQuery } from "@mui/material";
// import Loaders from "../components/layouts/Loaders";

// import Chats from "../pages/Chats";
// import { Outlet } from "react-router-dom";
const App = () => {
  // const [profile, setProfile] = useState("");
  // const [name, setName] = useState("");

  // const chatClick = (img: string, ide: string) => {
  //   setProfile(img);
  //   setName(ide);
  // };
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const [showSidebar, setShowSidebar] = useState(true);
  const backClick = () => {
    setShowSidebar(true);
  };
  const chatClick = () => {
    setShowSidebar(false);
    return 1;
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
          display: {
            xs: showSidebar ? "block" : "none",
          },
          flexDirection: "column",
          borderRight: "1px solid black",
          height: "100vh", // Set a fixed height
          overflowY: "auto",
        }}
        xl={3}
        lg={4}
        md={12}
        sm={12}
        xs={12}
      >
        {!isDesktop ? (
          showSidebar && <ChatsBar chatClick={chatClick}></ChatsBar>
        ) : (
          <ChatsBar chatClick={chatClick}></ChatsBar>
        )}
      </Grid>

      {/* chat message grid */}
      <Grid
        item
        container
        sx={{
          display: {
            xs: showSidebar ? "none" : "block",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
        }}
        xl={9}
        lg={8}
        md={12}
        sm={12}
        xs={12}
      >
        {!isDesktop ? (
          !showSidebar && <Messages backClick={backClick}></Messages>
        ) : (
          <Messages backClick={backClick}></Messages>
        )}
      </Grid>
    </Grid>
    // </ContextProvider>
  );
};

export default App;
