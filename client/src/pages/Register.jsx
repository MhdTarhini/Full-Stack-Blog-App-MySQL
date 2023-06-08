import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-Register-page">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <input required type="email" placeholder="Email Address" />
        <button>Login</button>
        <p>This is an error</p>
        <span>
          have an account?<Link to={"/Login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
