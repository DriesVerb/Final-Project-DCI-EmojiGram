<<<<<<< HEAD
import React, { useState, useContext, useEffect, Link} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
=======
import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";





>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
function Login(props) {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { login, isAuthenticated ,error, clearErrors, } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  useEffect(() => {
    if (error === 'Either your email or password or both are not correct.. Please try again') {
      setAlert(error, 'danger');
      clearErrors();
      setUser({
        email: '',
        password:''})
    }
    // redirect to Home Page
    if (isAuthenticated) {
      //should pass the props in the function component
      props.history.push("/userInterface");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history, error, user]);

<<<<<<< HEAD
      props.history.push('/UserInterface');
    }
  }, [isAuthenticated, props.history]);
=======

>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
  const getData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submToServer = () => {
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'warning');
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
        }}>
        <h2>Login</h2>
        <label htmlFor='email'>Email</label>
        <input
<<<<<<< HEAD
          type='text'
          name='email'
          placeholder='Your Email..'
=======
          value={email}
          type="text"
          name="email"
          placeholder="Your Email.."
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
          onChange={getData}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
<<<<<<< HEAD
          type='password'
          name='password'
          placeholder='Your Password..'
=======
          value={password}
          type="password"
          name="password"
          placeholder="Your Password.."
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
          onChange={getData}
        />
        <button type='submit' className='btn btn-success'>
          Login
        </button>

        <a href="http://localhost:3000/resetpassword" target="_blank">
          Reset Password
        </a>

      </form>
      {/* <button>Facebook</button>
      <button>Instagram</button>
      <button>Github</button> */}
      <a
        href='http://localhost:5000/login/passport/github'
        className='fab-fa-github btn btn-dark font-weight-bold '>
        Github
      </a>
      <a
        href='http://localhost:5000/login/passport/instagram'
        className='btn btn-danger ml-4 font-weight-bold'>
        Instagram
      </a>
      <a
        href='http://localhost:5000/login/passport/facebook'
        className='btn btn-primary ml-4 font-weight-bold '>
        Facebook
      </a>
    </div>
  );
}
export default Login;
