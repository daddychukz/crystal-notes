import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthRoute from "./components/AuthRoute";
import UnauthRoute from "./components/UnauthRoute";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <UnauthRoute exact path="/login">
            <Login />
        </UnauthRoute>
        <UnauthRoute exact path="/signup">
            <Signup />
        </UnauthRoute>
        <AuthRoute exact path="/notes/new">
            <NewNote />
        </AuthRoute>
        <AuthRoute exact path="/notes/:id">
            <Notes />
        </AuthRoute>
        <AuthRoute exact path="/settings">
            <Settings />
        </AuthRoute>
        <Route>
            <NotFound />
        </Route>
    </Switch>
  );
}