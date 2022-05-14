import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { FaInfo } from "react-icons/fa";

const About = ({ setAlert, setCardInfo }) => {
  const alert_show = {
    icon: <FaInfo />,
    alert: true,
    severity: "info",
    showAlert: true,
    variant: "outlined",
    title: "Info",
    text: "This About Page!",
  };
  const cardInfo = {
    title: "About",
    avatar: null,
  };
  useEffect(() => {
    setCardInfo(cardInfo);
    setAlert(alert_show);
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, []);

  return (
    <>
      <Typography paragraph>Nothing to write !</Typography>
    </>
  );
};

export default About;
