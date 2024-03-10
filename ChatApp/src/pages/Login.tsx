import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link as NavigateLink } from "react-router-dom";
const Login = () => {
  const handleCheck = () => {
    console.log("checked");
  };
  return (
    <Grid
      sx={{
        overflowY: "auto",
        backgroundImage:
          'url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")',
      }}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
    >
      <Paper
        elevation={18}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "550px",
          width: "23%",
          margin: "auto",
          padding: "2rem",
          alignItems: "center",
          borderRadius: "0.5rem",
          //   justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
          mt={0}
          mb={1}
        >
          <Avatar sx={{ backgroundColor: "#1bbd7e" }}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: "30px" }}
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: "20px" }}
          />
        </Grid>
        <FormControlLabel
          label="remember-me"
          control={
            <Checkbox
              value=""
              checked={true}
              onChange={handleCheck}
              color="primary"
            />
          }
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          Sign in
        </Button>
        <Typography m={2}>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <NavigateLink to={"/signup"}>Sign Up</NavigateLink>
          {/* <Link href="/signup">Sign Up</Link> */}
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
