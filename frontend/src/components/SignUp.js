import React, { useState } from "react";

// components
import "./styles/SignUp.css";

// other
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const SignUp = ({ toggleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (password === password2) {
      // reset errors
      setEmailErr("");
      setPasswordErr("");

      try {
        const res = await fetch("http://localhost:4242/user/create", {
          method: "POST",
          withCredentials: true,
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        // update error div
        if (data.errors) {
          setEmailErr(data.errors.email);
          setPasswordErr(data.errors.password);
          setProcessing(false);
        }
        if (data.user) {
          toggleSignUp();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setPasswordErr("passwords must match");
    }
  };

  return (
    <div className="signUp">
      <h1>create an account</h1>
      <div className="signUp__close">
        <CloseIcon onClick={toggleSignUp} />
      </div>
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
        <input
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          name="password2"
          type="password"
          placeholder="re-enter password"
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

export default SignUp;
