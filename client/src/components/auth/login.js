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
  Typography,
  Link,
} from "@material-ui/core";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Formik, Form, Field } from "formik";
/* import * as Yup from "yup"; */
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
        remember: false,
      });
    }
    // redirect to Home Page
    if (isAuthenticated) {
      //should pass the props in the function component
      props.history.push("/userInterface");
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
/*   const validationSchema = Yup.object().shape({
    email: Yup.string().email(""),
  }); */
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 420,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#FB8500" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} className="avatar mb-4">
            <HttpsOutlinedIcon />
          </Avatar>
          <h3 className="login mb-5">Log In</h3>
        </Grid>
        <Formik>
          <Form onSubmit={(e) => {
            e.preventDefault();
            submToServer();
          }}>
            <Field
              as={TextField}
              className="field mb-5"
              label="Email"
              name="email"
              variant="outlined"
              placeholder="Enter Email"
              fullWidth
              onChange={getData}
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
            />
            <Field
              as={FormControlLabel}
              name="remember"
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            <Button
              className="btn mt-2"
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Form>
        </Formik>
        <Typography className="typo mt-3">
          <Link href="#">Forgot Password</Link>
        </Typography>
        <h4 className="signup mt-5">
          Do not have an account?
          <Link className="link ml-3 mb-4" href="/signup">
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
    </Grid>

  );
}
export default Login;

/* import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

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
      props.history.push("/userInterface");
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
  return (
    <div className="grid-container">
      <div className="grid-container__mid">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submToServer();
          }}
        >
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="text"
            name="email"
            placeholder="Your Email.."
            onChange={getData}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="Your Password.."
            onChange={getData}
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form> */
        {/* <button>Facebook</button>
    <button>Instagram</button>
    <button>Github</button> */}
        {/* <a
          href="http://localhost:5000/login/passport/github"
          className="fab-fa-github btn btn-dark font-weight-bold "
        >
          Github
        </a>
        <a
          href="http://localhost:5000/login/passport/instagram"
          className="btn btn-danger ml-4 font-weight-bold"
        >
          Instagram
        </a>
        <a
          href="http://localhost:5000/login/passport/facebook"
          className="btn btn-primary ml-4 font-weight-bold "
        >
          Facebook
        </a>
      </div>
    </div>
  );
}
export default Login;
 */}

