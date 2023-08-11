import React, { useEffect } from "react";
import authStore from "../stores/authStore";
import { Navigate } from "react-router-dom";

function RequireAuth(props) {
  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  const store = authStore();

  if (store.loggedIn === null) {
    return <div>Loading</div>;
  }
  if (store.loggedIn === false) {
    return <Navigate to={"/login"} />;
  }

  return <div>{props.children}</div>;
}

export default RequireAuth;
