import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },
  signupForm: {
    email: "",
    password: "",
  },

  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },
  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  signup: async () => {
    const { signupForm } = authStore.getState();
    const res = await axios.post("/signup", signupForm);
  },

  login: async () => {
    const { loginForm } = authStore.getState();
    const res = await axios.post("/login", loginForm);
    set({ loggedIn: true });
    console.log(res);
  },

  logout: async () => {
    const res = await axios.get("/logout", {
      withCredentials: false,
    });
    set({ loggedIn: false });
    console.log(res);
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth", {
        withCredentials: true,
      });
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },
}));

export default authStore;
