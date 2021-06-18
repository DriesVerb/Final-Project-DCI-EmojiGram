import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
// import AuthContext from '../../context/auth/authContext';

function Login() {
  // const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submToServer = (e) => {
    e.preventDefault();
    axios
      .post("/" /* Here the Route */, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submToServer}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email.."
          onChange={getData}
          defaultValue="hello@hi.com"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your Password.."
          onChange={getData}
          defaultValue="123456"
        />
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
      <button>Facebook</button>
      <button>Instagram</button>
      <button>Github</button>
    </div>
  );
}

export default Login;
