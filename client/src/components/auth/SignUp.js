import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

//Material UI
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import { Formik, Form, Field } from "formik";

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
      setAlert("Successfully Signed Up", "success");
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 420,
    margin: "20px auto",
  };
  // const avatarStyle = { backgroundColor: "warning" };

  return (
    <Grid>
      <div style={{ marginTop: "50px" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h3 className="login mt-5 text-info">Welcome to Emoji-Tales</h3>
            <h4 className="login mb-5 mt-3">Create an Account</h4>
          </Grid>
          <Formik>
            <Form onSubmit={onSubmit}>
              <Field
                as={TextField}
                className="field mb-5"
                label="Username"
                name="username"
                variant="outlined"
                placeholder="Enter Username"
                fullWidth
                onChange={onChange}
                required
              />
              <Field
                as={TextField}
                className="field mb-5"
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Enter Email"
                type="email"
                fullWidth
                onChange={onChange}
                required
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                variant="outlined"
                placeholder="Enter Password"
                type="password"
                fullWidth
                onChange={onChange}
                required
              />

              <Button
                className="btn mt-5 bg-info"
                type="submit"
                variant="contained"
                fullWidth
              >
                <Avatar className="avatar mb-4s">
                  <HttpsOutlinedIcon />
                </Avatar>
                <span className="ml-3 text-white "> Sign Up</span>
              </Button>
            </Form>
          </Formik>

          <h4 className="signup mt-5">
            Already have an account?
            <Link className="link ml-3 mb-4 text-info" href="/login">
              Log In
            </Link>
          </h4>
          <h5 className="signup mt-5 font-italic">
            By clicking SignUp you agree to our Terms and have read and
            acknowledge our Privacy Statements.
          </h5>
        </Paper>
      </div>
    </Grid>
  );
};

export default SignUp;
