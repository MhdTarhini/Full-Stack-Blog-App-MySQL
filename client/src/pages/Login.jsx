import React from "react";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login-Register-page">
      <h1>WELCOME</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error</p>
        <span>
          Don't have an account <Link to={"/Register"}>Register</Link>
        </span>
      </form>
    </div>
  );
}

export default login;
