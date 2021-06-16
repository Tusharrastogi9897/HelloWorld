import React from 'react';
import { Grid, TextField, Button, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { colorGradient } from "../theme";
import { Link } from "react-router-dom";
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  loginButton: {
    color: theme.palette.primary.main,
    background: colorGradient.secondary,
    marginRight: "1%"
  }
}));

export default function LoginForm(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Pasword" type="password" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions style={{ justifyContent: "center", marginTop: "2%", display: "flex" }}>
        <Button variant="contained" color="secondary" size="large" className={classes.loginButton}>Login</Button>
        <Typography variant="subtitle2" color="secondary">or</Typography>
        <Button variant="text" color="primary" component={Link} to="/auth/signup" endIcon={<ArrowForward />} size="large">Sign Up</Button>
      </CardActions>
    </React.Fragment>
    )
}