import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import { auth } from "./config/firebase";
import Login from "./pages/login";
import Register from "./pages/register";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          setIsAuthenticated(true);
          setAuthReady(true);
          // ...
        } else {
          // User is signed out
          setAuthReady(true);
        }
      });
    }
    checkAuth();
  }, []);

  console.log(isAuthenticated);
  return (
    <>
      {authReady ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      ) : null}
    </>
  );
}

export default App;
