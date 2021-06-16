import React, { useState } from "react";
import axios from "axios";

function Login() {
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
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your Password.."
          onChange={getData}
        />
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
      {/* <button>Facebook</button>
                <button>Instagram</button>
                <button>Github</button> */}
      <a
        href="http://localhost:5000/login/passport/github"
        className="btn btn-primary  font-weight-bold"
      >
        Github
      </a>
      <a
        href="http://localhost:5000/login/passport/facebook"
        className="btn btn-danger ml-4 font-weight-bold"
      >
        Facebook
      </a>
    </div>
  );
}

export default Login;
