import React, { useState } from "react";

import Card from "../Analytics/CardStyles/Card";
import classes from "./Login.module.scss";
import SignUpModa from "./SignUpModa";

const Login = (props) => {
    const [addUserModal,setAddUserModal]=useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  /*addUser Modal*/
  const addUserModalHandler=()=>{
    setAddUserModal(true);
  }

  const closeAddUserModalHandler=()=>{
    setAddUserModal(false);
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </button>
        </div>
      </form>
      <div className={classes.LoginBottom}>
        <span>
          No Account?<span onClick={addUserModalHandler}>Sign up</span>
        </span>
        <span>
          Sign in with{" "}
          <a href="https://taskatar.onrender.com/auth/google">Google</a>
        </span>
      </div>
      {addUserModal && <SignUpModa onClose={closeAddUserModalHandler} />}
    </Card>
  );
};

export default Login;
