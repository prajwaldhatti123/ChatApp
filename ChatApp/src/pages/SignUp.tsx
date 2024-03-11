import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link as NavigateLink } from "react-router-dom";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";

//c signup form component
const SignUp = () => {
  //show password hook
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  return (
    <Grid
      //   mt={"20vh"}
      sx={{
        backgroundImage:
          'url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")',
        overflowY: "scroll",
      }}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "700px",
          width: "23%",
          margin: "auto",
          padding: "2rem",
          alignItems: "center",
          borderRadius: "0.5rem",
          //   overflowY: "scroll",
          //   backgroundImage:
          //     'url("https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          //   justifyContent: "center",
        }}
      >
        <Grid
          spacing={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
          //   mt={2}
          mb={2}
        >
          <Avatar sx={{ backgroundColor: "#1bbd7e" }}>
            <HowToRegIcon />
          </Avatar>
          <Typography variant="h6" mt={2}>
            {" "}
            Register
          </Typography>
          <Typography variant="body2" color="GrayText">
            Register to use the Chat App
          </Typography>
        </Grid>
        <Grid>
          {/* Email textField */}
          <TextField
            label="Email Id"
            placeholder="Enter Email"
            type="text"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "30px" }}
          />

          {/* userName textField */}
          <TextField
            label="Username"
            placeholder="Enter username"
            type="text"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "30px" }}
          />

          {/* Password textField */}
          <TextField
            label="Password"
            placeholder="Enter New Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="password-visibility"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "30px" }}
          />

          {/* confirm Password textField */}
          <TextField
            label="Confirm Password"
            placeholder="Confirm New Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="password-visibility"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "30px" }}
          />
        </Grid>

        {/* terms and conditions */}

        <Typography variant="body1" color="initial" mb={2}>
          <FormControlLabel
            label="I Agree to the  "
            control={
              <Checkbox
                value=""
                checked={true}
                //   onChange={handleCheck}
                color="primary"
              />
            }
          />
          <span>
            <NavigateLink to={"#"}>Terms and Conditions</NavigateLink>
          </span>
        </Typography>

        <Button type="submit" color="primary" variant="contained" fullWidth>
          Sign in
        </Button>
        <Typography mt={2}>
          {" "}
          Already have an account ?{" "}
          <NavigateLink to={"/login"}>Login</NavigateLink>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default SignUp;
