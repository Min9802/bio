import {
  Button,
  Container,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Grid,
  Zoom,
  Grow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "react-icons/fa";
import LogoMin from "./assets/images/logo192.png";
import listRoutes from "./routes";

const routes = listRoutes.map((route) => ({
  name: route.name,
  path: route.path,
  icon: route.icon,
}));
const checked = true;
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
    height: "500px",
    backgroundImage: `url('https://picsum.photos/1920/1080?random=300')`,
  },
  box_card: {
    align: "center",
    justify: "center",
    alignItems: "center",
  },
  Button_bio: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    marginTop: "10%",
    minWidth: 400,
    maxWidth: 400,
    minHeight: 300,

    background: "linear-gradient(to right, #da22ff, #9733ee)",
  },
  cardbody: {
    background: "white",
  },
}));

function GridItem({ classes, btnTrans }) {
  return (
    <>
      <Grow
        in={btnTrans}
        style={{ transformOrigin: "0 0 0" }}
        {...(btnTrans ? { timeout: 1000 } : {})}
      >
        <Stack spacing={2}>
          {routes.map((route, key) => (
            <Button
              key={key}
              variant="outlined"
              className={classes.paper}
              href={route.path}
            >
              {route.icon}
              {route.name}
            </Button>
          ))}
        </Stack>
      </Grow>
    </>
  );
}
const App = () => {
  const classes = useStyles();
  const [cardTrans, setCardtrans] = useState(false);
  const [btnTrans, setBtntrans] = useState(false);
  useEffect(()=>{
    setTimeout(
      setCardtrans(true), 
      3000,
      setBtntrans(true)
    );
  })
  return (
    <Container fixed className={classes.container}>
      <Box className={classes.box_card}>
        <Grid container justifyContent="center" alignItems="center">
        <Card className={classes.card}>
              <CardHeader
                avatar={<Avatar alt="Min" aria-label="recipe" src={LogoMin} />}
                action={<IconButton aria-label="settings"></IconButton>}
                title="Bio Min"
                subheader={'"a smile here"'}
              />
              <CardContent className={classes.cardbody}>
                <Typography>
                  <GridItem classes={classes.Button_bio} btnTrans = {btnTrans} />
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
