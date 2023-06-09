import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="login-Register-page">
      <h1>Register</h1>
      <form>
        <input required type="file" name="image" onChange={handlechange} />
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
        {error && <p>{error}</p>}
        <span>
          have an account?<Link to={"/Login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
