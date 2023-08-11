import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>welcome to login </h1>
        <input
          className="input"
          type="text"
          placeholder="email"
          value={store.loginForm.email}
          onChange={store.updateLoginForm}
          name="email"
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          value={store.loginForm.password}
          onChange={store.updateLoginForm}
          name="password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default LoginForm;
