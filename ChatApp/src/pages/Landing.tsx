import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Grid
      sx={{
        overflowY: "auto",
        backgroundImage:
          'url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")',
      }}
      height={"100vh"}
      display={"flex"}
      //   flexDirection={"column"}
      //   alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        maxWidth="lg"
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          //   margin: "auto",signup
          marginTop: "15vh",
          width: "50%",
        }}
      >
        <Grid>
          <Typography variant="h2" color="initial">
            FreeChat
          </Typography>
        </Grid>
        <Grid component={"image"} mt={4}>
          <img
            src="https://cdn.pixabay.com/photo/2018/02/04/01/54/paper-planes-3128885_1280.png"
            alt=""
            height={"100"}
          />
        </Grid>
        <Grid
          m={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            color="initial"
            m={1}
            sx={{
              fontFamily: '"-apple-system", serif',
              fontWeight: 400,
            }}
          >
            Welcome to FreeChat
          </Typography>
          <Typography
            variant="h6"
            color="theme.palette.text.secondary"
            m={1}
            sx={{
              maxWidth: "500px",
            }}
          >
            seamless communication meets effortless connection. Chat, share, and
            stay connected with ease
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h6" color="initial">
            <Link to="/login">Login</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
