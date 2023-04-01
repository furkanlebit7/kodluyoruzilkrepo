import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, admin, ...rest }) => {
  const { loggedIn, user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (admin && user.role !== "admin") {
          return <Redirect to={{ pathname: "/" }} />;
        }
        if (loggedIn) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
};

export default ProtectedRoute;
