import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import { FaInfo } from "react-icons/fa";

const Home = ({ setAlert, setCardInfo }) => {
  const alert_show = {
    icon: <FaInfo />,
    alert: true,
    severity: "info",
    showAlert: true,
    variant: "outlined",
    title: "Info",
    text: "This Home Page!",
  };
  const cardInfo = {
    title: "Home",
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
      <Typography paragraph>Welcome to Min !</Typography>
      <Typography paragraph>Nothing to write !</Typography>
    </>
  );
};

export default Home;
