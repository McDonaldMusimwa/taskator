import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./components/Analytics/Analytics";
import NavBar from "./components/navBar/navBar";
import Teams from "./components/Teams/Teams";
import Documents from "./components/Documents/Documents";
import Dashboad from "./components/DashBoard/DashBoard";
import Settings from "./components/Settings/Settings";
import Login from "./components/Ui/Login";
import StoreContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("isLoggedIn");

    if (storedUserInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <StoreContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <main className="App">
          {!isLoggedIn ? (
            <Login onLogin={loginHandler} />
          ) : (
            <>
              <NavBar onLogout={logoutHandler} />
              <Routes>
                <Route path="/" element={<Dashboad />}></Route>
                <Route path="analytics" element={<Analytics />}></Route>
                <Route path="team" element={<Teams />}></Route>
                <Route path="documents" element={<Documents />}></Route>
                <Route path="settings" element={<Settings />}></Route>
              </Routes>
            </>
          )}
        </main>
      </StoreContext.Provider>
    </BrowserRouter>
  );
}

export default App;
