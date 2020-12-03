import React, { useState } from "react";

// components
import "./styles/Login.css";

// other
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

// redux
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

const Login = ({ toggleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // reset errors
    setEmailErr("");
    setPasswordErr("");

    try {
      const res = await fetch("http://localhost:4242/user/login", {
        method: "POST",
        withCredentials: true,
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      // update error divs
      if (data.errors) {
        setEmailErr(data.errors.email);
        setPasswordErr(data.errors.password);
        setProcessing(false);
      }
      if (data.user) {
        toggleLogin();
        dispatch(login(email));
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className="email error">{emailErr}</div>
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
        <div className="password error">{passwordErr}</div>
        <Button onClick={handleSubmit}>
          {processing ? "PROCESSING" : "CONTINUE"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
