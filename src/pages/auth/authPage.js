import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { aeroAnimationData } from '../../animation/aeroAnimation/index';
import Lottie from 'react-lottie';
import { colorGradient } from "../theme";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";
import { Redirect, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: `${window.screen.height}px`,
    background: colorGradient.primary
  },
  card: {
    padding: "3%",
    backgroundColor: theme.palette.common.light_red,
    margin: theme.breakpoints.down("md") ? "2%" : 0
  }
}));

export default function AuthPage(props) {

  const classes = useStyles();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: aeroAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const pathName = window.location.pathname;
  const [speed, setSpeed] = useState(0);
  useEffect(() => {
    setSpeed(100);
  }, []);

  return (
    <React.Fragment>
      <Switch>
        <Redirect exact from="/auth" to="/auth/login" />
      </Switch>
      <Grid container spacing={1} className={classes.root} justify="center" alignItems="center">
        <Grid item xs={12} md={4} style={{ marginBottom: "6%" }}>
          <Card elevation={2} className={classes.card}>
            <Grid container style={{marginBottom: "-5%"}}>
            <Grid item xs={12}>
              <Lottie options={defaultOptions}
                height={"40%"}
                width={"40%"}
                speed={speed}
                style={{ marginLeft: "15%", marginBottom: "-5%" }}
              />
              <img src="/logo4.svg" alt="HelloWorld" height={"60%"} width={"100%"} />
              </Grid>
            </Grid>
            {pathName === "/auth/login" ?
              <LoginForm /> :
                pathName === "/auth/signup" ? <SignUpForm /> : null}
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
    );
}