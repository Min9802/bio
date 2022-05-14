import React from "react";
import { FaHome, FaInfo, FaUserCircle } from "react-icons/fa";
import About from "../pages/About";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";
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
    component: <Contact />,
  },
  {
    name: "About",
    icon: <FaInfo />,
    path: "/about",
    component: <About />,
  },
];

export default sideRoutes;
