import {
  CardActions,
  CardContent,
  CardHeader,
  Container,
} from "@material-ui/core";
import { Card } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import AlertMsg from "./AlertMsg";
import FixedBottomNavigation from "./footerNav";
import MiniDrawer from "./MiniDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";

import CardLoading from "../isLoading/CardLoading";

const useStyles = makeStyles((theme) => {
  return {
    container_big: {
      marginTop: "5%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      maxWidth: "100%",
    },
    container_medium: {
      marginTop: "20%",
      backgroundSize: "100%",
    },
    box_card: {
      align: "center",
      justify: "center",
      alignItems: "center",
    },
    buttonstyle: {
      border: "solid",
      borderRadius: "50px",
    },
    Button_bio: {
      padding: theme.spacing(1),
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    cardload: {
      marginTop: "5%",
      minWidth: 300,
      maxWidth: 300,
      minHeight: 300,
      marginBottom: "10%",
      background: "linear-gradient(to right, #da22ff, #9733ee)",
    },
    cardbody: {
      background: "white",
    },
  };
});
const GuestLayout = ({ children, card_info }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const [cardInfo, setCardInfo] = useState(false);
  // response
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  //end

  const ChirenPages = React.cloneElement(children, {
    setAlert,
    setCardInfo,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  useCallback(() => {
    setAlert(alert);
  });
  return (
    <MiniDrawer>
      {alert ? (
        <AlertMsg
          icon={alert.icon}
          alert={alert.alert}
          severity={alert.severity}
          showAlert={alert.showAlert}
          variant={alert.variant}
          title={alert.title}
          text={alert.text}
        />
      ) : null}
      <React.Fragment>
        <Container
          className={
            isDesktop
              ? classes.container_big
              : isTabletOrMobile
              ? classes.container_medium
              : classes.container
          }
        >
          {isLoading ? (
            <CardLoading />
          ) : (
            <Card>
              <CardHeader
                avatar={cardInfo.avatar}
                title={cardInfo.title}
              ></CardHeader>
              <CardContent>{ChirenPages}</CardContent>
              <CardActions>{cardInfo.actions}</CardActions>
            </Card>
          )}
        </Container>
      </React.Fragment>
      <FixedBottomNavigation />
    </MiniDrawer>
  );
};
export default GuestLayout;
