import React from "react";
import { Button, Typography, Stack, Skeleton, Grow } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btnBio: {
    fontWeight: "bold",
    fontSize: "",
    fontFamily: "Roboto",
    textTransform: "uppercase",
  },
}));

const ButtonBio = ({ btnTrans, isLoading, routes }) => {
  const classes = useStyles();
  return (
    // <Grow
    //   in={btnTrans}
    //   style={{ transformOrigin: "0 0 0" }}
    //   {...(btnTrans ? { timeout: 1000 } : {})}
    // >

    // </Grow>
    <Stack spacing={2}>
      {isLoading
        ? routes.map((route, key) => (
            <Skeleton key={key} width="100%">
              <Typography key={key}>.</Typography>
            </Skeleton>
          ))
        : routes.map((route, key) => (
            <Button
              style={{
                border: "solid 1px",
                borderRadius: "50px",
                textAlign: "left",
              }}
              key={key}
              startIcon={route.icon}
              variant="outlined"
              href={route.path}
              className={`fadeIn ${
                key == 1
                  ? "first"
                  : key == 2
                  ? "second"
                  : key == 3
                  ? "third"
                  : key == 4
                  ? "fourth"
                  : ""
              }`}
            >
              {route.name}
            </Button>
          ))}
    </Stack>
  );
};

export default ButtonBio;
