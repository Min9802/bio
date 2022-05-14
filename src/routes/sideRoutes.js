import React from "react";
import { FaHome, FaInfo, FaUserCircle } from "react-icons/fa";
import Bio from "../pages/Bio";
import Home from "../pages/Home";

const sideRoutes = [
  {
    name: "Home",
    icon: <FaHome />,
    path: "/",
    component: <Bio />,
  },
  {
    name: "Contact",
    icon: <FaUserCircle />,
    path: "/contact",
    component: <Bio />,
  },
  {
    name: "About",
    icon: <FaInfo />,
    path: "/about",
    component: <Home />,
  },
];

export default sideRoutes;
