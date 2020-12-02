import React, { useState } from "react";

// components
import "./styles/Login.css";

// other
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Login = ({ toggleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);

  return (
    <div className="login">
      <div className="login__close">
        <CloseIcon onClick={toggleLogin} />
      </div>
      <h1>Sign In</h1>
      <form>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="email"
          autoComplete="email"
          required
        />
        <div className="email error"></div>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          placeholder="password"
          autoComplete="true"
          required
        />
        <div className="password error"></div>
        <Button>{processing ? "PROCESSING" : "CONTINUE"}</Button>
      </form>
    </div>
  );
};

export default Login;
