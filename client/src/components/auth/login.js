import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import SideNavBar from "../layout/SideNavBar";

//Material UI
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Formik, Form, Field } from "formik";

function Login(props) {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { login, isAuthenticated, error, clearErrors } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  useEffect(() => {
    if (
      error ===
      "Either your email or password or both are not correct.. Please try again"
    ) {
      setAlert(error, "danger");
      clearErrors();
      setUser({
        email: "",
        password: "",
      });
    }
    // redirect to Home Page
    if (isAuthenticated) {
      //should pass the props in the function component
      props.history.push("/userinterface");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history, error, user]);
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
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 420,
    margin: "20px auto",
  };

  return (
    <Grid>
      <div style={{ marginTop: "50px" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar className="avatar mb-4">
              <HttpsOutlinedIcon />
            </Avatar>
            <h3 className="text-info mb-5">Login to Account</h3>
          </Grid>
          <Formik>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submToServer();
              }}
            >
              <Field
                as={TextField}
                className="field mb-5"
                label="Email"
                name="email"
                variant="outlined"
                placeholder="Enter Email"
                fullWidth
                onChange={getData}
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
                onChange={getData}
                required
              />

              <Button
                className="btn mt-5 bg-info "
                // className="btn mt-2"
                type="submit"
                variant="contained"
                fullWidth
              >
                <span className="text-white">Login</span>
              </Button>
            </Form>
          </Formik>
          <Typography className="typo mt-3">
            <Link className="text-info" href="#">
              Forgot Password?
            </Link>
          </Typography>
          <h4 className="signup mt-5">
            Do not have an account?
            <Link className=" text-info ml-3 mb-4" href="/signup">
              Sign Up
            </Link>
          </h4>
          <Grid align="center">
            <h4 className="login mb-4 mt-5"> Login With</h4>
          </Grid>
          <Grid align="center">
            <a
              href="http://localhost:5000/login/passport/github"
              className=" btn btn-dark font-weight-bold"
            >
              <GitHubIcon className="github ml-1" />
            </a>
            <a
              href="http://localhost:5000/login/passport/instagram"
              className="btn btn-danger ml-4 font-weight-bold"
            >
              <InstagramIcon className="instagram ml-1" />
            </a>
            <a
              href="http://localhost:5000/login/passport/facebook"
              className="btn btn-primary ml-4 font-weight-bold"
            >
              <FacebookIcon className="facebook ml-1" />
            </a>
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
}
export default Login;
