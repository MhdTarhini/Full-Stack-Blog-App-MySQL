import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-Register-page">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handlechange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlechange}
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handlechange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error</p>
        <span>
          have an account?<Link to={"/Login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
