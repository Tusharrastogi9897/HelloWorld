import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import AuthPage from "./auth/authPage";
import MainDashboard from "./dashboard/mainDashboard";

export default function PageRouter(props) {

  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/auth" component={AuthPage} />
      <Route path="/dashboard" component={MainDashboard} />
    </Switch>
    )
}