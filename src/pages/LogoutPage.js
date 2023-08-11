import React, { useEffect } from "react";
import authStore from "../stores/authStore";

function LogoutPage() {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);
  return (
    <div>
      <h4 className="notesh1">you are now logged out</h4>
    </div>
  );
}

export default LogoutPage;
