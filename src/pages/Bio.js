import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import listRoutes from "../routes";

import "../sass/app.scss";
import ButtonBio from "../components/ButtonBio";

import { FaInfo } from "react-icons/fa";

const useStyles = makeStyles((theme) => {
  return {
    Button_bio: {
      padding: theme.spacing(1),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
  };
});

const Bio = ({ setAlert, setCardInfo }) => {
  const classes = useStyles();

  const [btnTrans, setBtntrans] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const alert_show = {
    icon: <FaInfo />,
    alert: true,
    severity: "info",
    showAlert: true,
    variant: "outlined",
    title: "Info",
    text: "Welcome to Min!",
  };
  const cardInfo = {
    title: "Bio",
    avatar: null,
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    setTimeout(() => {
      setBtntrans(true);
    }, 1500);

    setAlert(alert_show);
    setCardInfo(cardInfo);
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, []);
  return (
    <ButtonBio
      classes={classes.Button_bio}
      btnTrans={btnTrans}
      isLoading={isLoading}
      routes={listRoutes}
    />
  );
};

export default Bio;
