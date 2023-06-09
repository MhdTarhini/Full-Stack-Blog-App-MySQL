import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const Navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      Navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="login-Register-page">
      <h1>WELCOME</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handlechange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't have an account <Link to={"/Register"}>Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
