import React, { useState, useReducer, useEffect } from "react";

import Card from "../Analytics/CardStyles/Card";
import classes from "./Login.module.scss";
import SignUpModal from "./SignUpModa";
import Logo from "../../logo.png";
//import { Link } from "react-router-dom";
import googlelogo from '../../assets/google.png';
//import { act } from "@testing-library/react";
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  //login https://tasketor.onrender.com/auth/login
  const [addUserModal, setAddUserModal] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid && passwordState.value.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.value.includes("@")
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  /*addUser Modal*/
  const addUserModalHandler = () => {
    setAddUserModal(true);
  };

  const closeAddUserModalHandler = () => {
    setAddUserModal(false);
  };

  const googleAuth = () => {
    console.log("Google log in")
    window.open(`${process.env.SERVER_URL}/login/auth/google`, "_self");
    
  };

  return (
    <div className={`${classes.LoginHome} ${classes.blur}`}>
      <div className={classes.Blob}>
        <img src={Logo} alt="Logo" />
      </div>

      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailState.isValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordState.isValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </button>
          </div>
        </form>
        <div className={classes.LoginBottom}>
        <button onClick={googleAuth}>
            Sign in with{" "}
            <img className={classes.img} src={googlelogo} alt="google logo" />
          </button>
          
          <button onClick={addUserModalHandler}>Sign up</button>
          
        </div>
        {addUserModal && <SignUpModal onClose={closeAddUserModalHandler} />}
      </Card>
      <div className={classes.Blob}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F1C21B"
            d="M52.2,-57.5C65.6,-50.9,73.2,-32.6,75.8,-13.9C78.5,4.7,76.1,23.6,68.1,41.1C60.1,58.6,46.6,74.6,31,76.7C15.4,78.7,-2.3,66.6,-18,57.5C-33.8,48.3,-47.8,42,-54.7,31.1C-61.7,20.1,-61.6,4.6,-57.5,-8.7C-53.4,-22,-45.2,-33.1,-35,-40.2C-24.7,-47.4,-12.4,-50.7,3.5,-54.8C19.4,-59,38.7,-64.1,52.2,-57.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Login;
