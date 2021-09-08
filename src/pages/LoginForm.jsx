import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { authenticate } from "../services/sevices";

import { Form, Button } from "react-bootstrap";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(name, password)
      .then((response) => {
        console.log("authenticated!");
        console.log(name, response);
        props.onLogin();
        history.push(props.redirectPath);
      })
      .catch((error) => {
        console.log(error.status);
        setMessage("Please provide valid name and password!");
      });
  };

  return (
    <div className="m-5">
      <h2 className="display-4 text-center">Welcome.</h2>
      <Form className={styles.LoginForm} onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="username"
          value={name}
          placeholder="email"
          onChange={handleNameInputChange}
        />
        <Form.Control
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handlePasswordInputChange}
        />
        <Button type="submit">Log in</Button>
        <div>{message}</div>
      </Form>
    </div>
  );
};

export default LoginForm;
