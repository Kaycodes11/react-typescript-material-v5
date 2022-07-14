import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Blissful styles
        </Typography>
        <Button variant="text" color="inherit" startIcon={<LoginIcon />}>
          Login
        </Button>
        <Button variant="text" color="inherit" startIcon={<LogoutIcon />}>
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
}
