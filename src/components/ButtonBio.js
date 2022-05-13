import React from "react";
import { Button, Typography, Stack, Skeleton, Grow } from "@mui/material";

const ButtonBio = ({ classes, btnTrans, isLoading, routes }) => {
  return (
    <Grow
      in={btnTrans}
      style={{ transformOrigin: "0 0 0" }}
      {...(btnTrans ? { timeout: 1000 } : {})}
    >
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
                className={classes}
                href={route.path}
              >
                {route.name}
              </Button>
            ))}
      </Stack>
    </Grow>
  );
};

export default ButtonBio;
