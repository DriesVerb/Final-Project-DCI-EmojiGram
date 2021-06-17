import React, { Fragment, useState, useContext, useEffect } from 'react';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { register, error } = authContext;

  //to check and load the error
  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'danger');
    }
  }, [error]);

  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    //validation or call the alert
    if (username === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'warning');
    }
    // else if (password !== password2) {
    //   setAlert('Passwords do not match', 'danger');}
    else {
      console.log(user);
      register(user);
    }
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
            minLength="6"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Fragment>
  );
};

export default SignUp;
