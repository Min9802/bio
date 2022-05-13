import {
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Avatar, Card, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AlertMsg from "./AlertMsg";
import FixedBottomNavigation from "./footerNav";
import MiniDrawer from "./MiniDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => {
  return {
    container_big: {
      marginTop: "7%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
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
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      setAlert(children.props.alert_show);
    }, 1500);
  });
  console.log(alert);
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
        <CssBaseline />
        <Container
          className={
            isDesktop
              ? classes.container_big
              : isTabletOrMobile
              ? classes.container_medium
              : classes.container
          }
        >
          <Card>
            <CardHeader
              avatar={
                isLoading ? (
                  <Avatar />
                ) : card_info ? (
                  card_info.avatar
                ) : (
                  <Avatar />
                )
              }
              title={
                isLoading ? (
                  <Skeleton width="100%">
                    <Typography>.</Typography>
                  </Skeleton>
                ) : (
                  <>{card_info ? card_info.title : null}</>
                )
              }
            ></CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton width="100%">
                  <Grid container wrap="nowrap" spacing={2}>
                    <Typography>.</Typography>
                  </Grid>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Typography>.</Typography>
                  </Grid>
                </Skeleton>
              ) : (
                <>{children}</>
              )}
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Container>
      </React.Fragment>
      <FixedBottomNavigation />
    </MiniDrawer>
  );
};
export default GuestLayout;
