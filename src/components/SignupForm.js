import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h1>welcome to Signup</h1>
        <input
          className="input"
          type="text"
          placeholder="email"
          value={store.signupForm.email}
          onChange={store.updateSignupForm}
          name="email"
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          value={store.signupForm.password}
          onChange={store.updateSignupForm}
          name="password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default SignupForm;
