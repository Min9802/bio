import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import CssBaseline from "@mui/material/CssBaseline";

import { Typography, MenuItem, Menu } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Drawers from "./patials/Drawers";
import { NavLink } from "react-router-dom";

import {
  FaUserCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserEdit,
  FaWallet,
} from "react-icons/fa";
import { ListItemIcon, ListItemText } from "@material-ui/core";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//style
const useStyles = makeStyles((theme) => ({
  sidenav_navlink: {
    textDecoration: "none",
  },
  textsidebar: {
    fontWeight: "bold",
    fontSize: "",
    fontFamily: "Roboto",
    textTransform: "uppercase",
  },
  authButton: {
    position: "absolute",
    right: 0,
  },
}));

export default function MiniDrawer(prop) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" className={classes.sidenav_navlink}>
            <Typography
              className={classes.textsidebar}
              variant="h6"
              noWrap
              color="white"
              component="div"
            >
              Min
            </Typography>
          </NavLink>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            style={{ position: "absolute", right: 20 }}
          >
            <FaUserCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {auth ? (
              <>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FaUserEdit />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FaWallet />
                  </ListItemIcon>
                  <ListItemText>Wallet</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FaSignOutAlt />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FaSignInAlt />
                </ListItemIcon>
                <ListItemText>Login</ListItemText>
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawers
        Drawer={Drawer}
        DrawerHeader={DrawerHeader}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
        open={open}
        SideBarRoutes={prop.SideBarRoutes}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {prop.children}
      </Box>
    </Box>
  );
}
