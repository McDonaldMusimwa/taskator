import React,{useState} from "react";
import "./App.css";
//import Analytics from "./components/Analytics/Analytics";
import NavBar from "./components/navBar/navBar";
//import Teams from "./components/Teams/Teams";
//import Documents from "./components/Documents/Documents";
import Dashboad from "./components/DashBoard/DashBoard";
//import Dashboad from './components/DashBoard';
//import Settings from "./components/Settings/Settings";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Ui/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={loginHandler} />
      ) : (
        <>
          <NavBar onLogout={logoutHandler} />
          <Dashboad />
        </>
      )}
    </div>
  );
}

export default App;
