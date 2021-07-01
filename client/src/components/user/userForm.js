import React, { useState, Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";
import { Button} from 'react-bootstrap';
const userForm = (props) => {
  const profileContext = useContext(ProfileContext);
  const { current, clearAll, editProfile } = profileContext;

  useEffect(() => {
    console.log(current)
    if (current !== null) 
      setUser(current);
 
    else (
      setUser({
        name: "",
        username: "",
        email: "",
        password: "",
        age: "",
        location: "",
      }));
    
  }, [profileContext, current]);




  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    age: "",
    location: "",
  });

  const { name, username, email, password, age, location } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
      editProfile(user);
    console.log(user)
    props.history.push("/profile");
  };

  const clear = () => {
    clearAll();
  };

  return (
    <Fragment>
      <h2 className="text-primary">Update Profile</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="username"
          placeholder="User name.."
          defaultValue={username}
          onChange={onChange}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name."
          defaultValue={name}
          onChange={onChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="enter email..."
          defaultValue={email}
          onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder={password}
          defaultValue="*****"
          onChange={onChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          placeholder="age..."
          defaultValue={age}
          onChange={onChange}
        />

        <label htmlFor="location">Location</label>
        <select
          id="location"
          name="location"
          defaultValue={location}
          onChange={(e) => onChange(e)}
        >
          <option defaultValue="Australia">Australia</option>
          <option defaultValue="Germany">Germany</option>
          <option defaultValue="Canada">Canada</option>
          <option defaultValue="USA">USA</option>
          <option defaultValue="Spain">Spain</option>
          <option defaultValue="France">France</option>
          <option defaultValue="UK">UK</option>
          <option defaultValue="Italy">Italy</option>
        </select>

        <Button variant="info" className="pl-3 pr-4 ml-2" type="submit" >Update</Button>

        {/* {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clear}>
              Clear
            </button>
          </div>
        )} */}
      </form>
    </Fragment>
  );
};
export default userForm;
