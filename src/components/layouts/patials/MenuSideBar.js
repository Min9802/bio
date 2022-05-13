import React from "react";
import ListItem from "@mui/material/ListItem";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import sideRoutes from "../../../routes/sideRoutes";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
}));
const MenuSideBar = ({ open }) => {
  const classes = useStyles();

  const routes = sideRoutes.map((route, index) => ({
    key: index,
    name: route.name,
    path: route.path,
    icon: route.icon,
    component: route.component,
  }));
  return (
    <>
      {routes.map((route, index) => (
        <NavLink
          key={index}
          to={route.path}
          className={classes.sidenav_navlink}
        >
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {route.icon}
              </ListItemIcon>
              <Typography variant="h6" noWrap component="div">
                <ListItemText
                  secondary={route.name}
                  sx={{ opacity: open ? 1 : 0 }}
                  className={classes.textsidebar}
                />
              </Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
      ))}
    </>
  );
};

export default MenuSideBar;
