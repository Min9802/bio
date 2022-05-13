import React from "react";
import { FaHome, FaInfo, FaUserCircle } from "react-icons/fa";
import Bio from "../pages/Bio";
import Home from "../pages/Home";

const sideRoutes = [
  {
    card: {
      title: "Home",
      avatar: null,
    },
    name: "Home",
    icon: <FaHome />,
    path: "/",
    component: <Bio />,
  },
  {
    card: {
      title: "Contact",
      avatar: null,
    },
    name: "Contact",
    icon: <FaUserCircle />,
    path: "/contact",
    component: <Bio />,
  },
  {
    card: {
      title: "About",
      avatar: null,
    },
    name: "About",
    icon: <FaInfo />,
    path: "/about",
    component: <Home />,
  },
];

export default sideRoutes;
