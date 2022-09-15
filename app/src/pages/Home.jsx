import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <Button color="inherit"><Link to="/auth">Login</Link></Button>
          <Button color="inherit"><Link to="/register">Register</Link></Button>
          <Button color="inherit" sx={{ display: "none" }}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
