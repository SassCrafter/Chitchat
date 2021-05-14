import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGIN } from "../constants/routes";

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  console.log(loggedInPath);

  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        return <Redirect to={{ pathname: loggedInPath }} />;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }
        return (
          <Redirect
            to={{
              pathname: LOGIN,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
