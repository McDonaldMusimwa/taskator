import React, { useState } from "react";
import styles from "./SignUpModal.module.scss";
import Button from "./Button";
const SignUpModa = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addfirstnameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const addlastnameHandler = (event) => {
    setLastName(event.target.value);
  };
  const addemailHandler = (event) => {
    setEmail(event.target.email);
  };
  const addpasswordHandler = (event) => {
    if (event.target.password === event.target.repassword) {
      setpassWord(event.target.password);
      setErrorMessage("");
    } else {
      setErrorMessage("Password do not match");
    }
  };

  const addUser = () => {
    let formData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    console.log(formData)
  };
  return (
    <div className={styles.backdrop}>
        <div className={styles.Modal}>
            <header className={styles.header}><h2>Create Account</h2></header>
      <form className={styles.content} onSubmit={addUser}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          onChange={addfirstnameHandler}
        ></input>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          onChange={addlastnameHandler}
        ></input>
        <label>Email:</label>
        <input type="email" name="email" onChange={addemailHandler}></input>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={addpasswordHandler}
        ></input>
        <label>Re enter Password:</label>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <input name="repassword" type="password"></input>
        <Button onClick={addUser}>Create Account</Button>
      </form>
      </div>
    </div>
  );
};

export default SignUpModa;
