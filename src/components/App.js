import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import authStore from "../stores/authStore";
import "./App.css";

function App() {
  const store = authStore();

  return (
    <div className="main">
      <BrowserRouter>
        <header className="App-header">
          <Link className="logo" to="/">
            DataBalk
          </Link>

          <div className="userauth">
            {store.loggedIn === false ? (
              <>
                {" "}
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            ) : (
              <Link to="/logout">logout</Link>
            )}
          </div>
        </header>

        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <NotesPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
