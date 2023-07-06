import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          News
        </Typography>

        <Button
          component={NavLink}
          to={"/"}
          sx={{ pt: 1 }}
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "#000" }
          }
        >
          Home
        </Button>
        {!user ? (
          <>
            <Button
              component={NavLink}
              to={"/login"}
              sx={{ pt: 1 }}
              style={({ isActive }) =>
                isActive ? { color: "white" } : { color: "#000" }
              }
            >
              Login
            </Button>
            <Button
              component={NavLink}
              to={"/register"}
              sx={{ pt: 1 }}
              style={({ isActive }) =>
                isActive ? { color: "white" } : { color: "#000" }
              }
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <Button
              component={NavLink}
              to={"/dashboard"}
              sx={{ pt: 1 }}
              style={({ isActive }) =>
                isActive ? { color: "white" } : { color: "#000" }
              }
            >
              dashboard
            </Button>
            <Button
              sx={{ pt: 1 }}
              color="danger"
              onClick={logout}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
