import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
function Login(props) {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { login, isAuthenticated } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  useEffect(() => {
    // redirect to Home Page
    if (isAuthenticated) {
      //should pass the props in the function component
      props.history.push("/landing");
    }
  }, [isAuthenticated, props.history]);
  const getData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submToServer = () => {
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "warning");
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submToServer();
        }}
      >
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
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
      <button>Facebook</button>
      <button>Instagram</button>
      <button>Github</button>
    </div>
  );
}
export default Login;
