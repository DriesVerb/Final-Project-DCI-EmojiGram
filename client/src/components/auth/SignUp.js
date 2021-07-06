import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const SignUp = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { register, isAuthenticated, error, clearErrors } = authContext;
  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = user;

  useEffect(() => {
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // redirect to Home Page
    if (isAuthenticated) {
      //should pass the props in the function component
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history, error]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validation or call the alert
    if (username === "") {
      setAlert("Please enter Username", "warning");
    } else if (password.length < 6) {
      setAlert(
        "Password should be at least 6 character, Please recreate it",
        "danger"
      );
    } else if (password === "") {
      setAlert("Please enter Password", "danger");
    } else if (email === "") {
      setAlert("Please enter Email", "danger");
    } else {
      register({ username, email, password });
    }
  };

  return (
    <div className="form-container">
      <h4>
        Account <span className="text-info">Register</span>
      </h4>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}

            // minLength='6'
          />
        </div>

        <Button className="ml-5" value="Register" type="submit" variant="info">
          sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
