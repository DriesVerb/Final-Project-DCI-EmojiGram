<<<<<<< HEAD
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
=======
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

function Login(props) {
    
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { login, isAuthenticated } = authContext;
    const { setAlert } = alertContext;
     
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const { email, password } = user;

    useEffect(() => {
        // redirect to Home Page
          if (isAuthenticated) {
            //should pass the props in the function component
            props.history.push('/');
          }
        
    }, [isAuthenticated, props.history]);
    


    
    const getData = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const submToServer = (e)=>{
        e.preventDefault();
        if (email === '' || password === '') {
          setAlert('Please fill in all fields', 'warning');
        } else {
          login({
            email,
            password
          });
        }
      };
    




    return (
        <div>
            <form onSubmit={submToServer}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Your Email.." onChange={getData}/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Your Password.." onChange={getData}/>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
                <button>Facebook</button>

                <button>Instagram</button>
                <button>Github</button> */}
      <a
        href="http://localhost:5000/login/passport/github"
        className="btn btn-dark  font-weight-bold"
      >
        Github
      </a>
      <a
        href="http://localhost:5000/login/passport/facebook"
        className="btn btn-primary ml-4 font-weight-bold"
      >
        Facebook
      </a>
>>>>>>> 4d64a0262c5b51acf4ac5fd74be2b768f91c4094
    </div>
  );
}

export default Login;
