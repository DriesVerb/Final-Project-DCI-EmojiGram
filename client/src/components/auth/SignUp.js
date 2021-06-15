import React from "react";
import { Fragment, useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log(user);
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Fragment>
  );
};

export default SignUp;
