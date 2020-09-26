import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./Signin.css";
import { auth, db } from "./firebase";

export const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => history.push("/"))
      .catch((err) => console.log(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        alert("Thankyou..! Please login to continue shopping with us.");
        console.log(res);
        history.push("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="singin__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="singin__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signin__loginButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="signin__registerButton" onClick={register}>
          Create an account
        </button>
      </div>
    </div>
  );
};
