import React from 'react';
import { Grid, TextField, Button, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { colorGradient } from "../theme";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  signupButton: {
    color: theme.palette.primary.main,
    background: colorGradient.secondary,
    marginRight: "1%"
  }
}));

export default function SignUpForm(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm Password" type="password" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="User Name" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions style={{ justifyContent: "center", marginTop: "2%", display: "flex" }}>
        <Button variant="text" color="primary" size="large" startIcon={<ArrowBack />} component={Link} to="/auth/login">Login</Button>
        <Typography variant="subtitle2" color="secondary">or</Typography>
        <Button variant="contained" color="secondary" size="large" className={classes.signupButton}>Sign Up</Button>
      </CardActions>
    </React.Fragment>
  )
}