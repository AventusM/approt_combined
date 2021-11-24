/* import React from "react";
import { Route, Redirect } from "react-router-native";
import { useSelector } from "react-redux";
import { MAIN_ROUTE } from "../../constants";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useSelector((state) => state.authData);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser) {
          return <Component {...props} />;
        } else {
          return <Redirect to={MAIN_ROUTE} />;
        }
      }}
    />
  );
};
 */