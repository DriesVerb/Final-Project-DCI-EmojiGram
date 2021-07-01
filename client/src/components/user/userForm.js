import React, { useState, Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";

const userForm = () => {
  
  const profileContext = useContext(ProfileContext);
  const { current, clearAll, editProfile } = profileContext;

  useEffect(() => {
    if (current !== null) {
      setUser(current);

      //} else {
      setUser({
        name: "",
        username: "",
        email: "",
        password: "",
        age: "",
        location: "",
      });
    }
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
    if (current === null) {
      editProfile(user);
    }
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
          value={username}
          onChange={onChange}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name."
          value={name}
          onChange={onChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="enter email..."
          value={email}
          onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="password..."
          value={password}
          onChange={onChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          placeholder="age..."
          value={age}
          onChange={onChange}
        />

        <label htmlFor="location">Location</label>
        <select
          id="location"
          name="location"
          value={location}
          onChange={(e) => onChange(e)}
        >
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="Spain">Spain</option>
          <option value="France">France</option>
          <option value="UK">UK</option>
          <option value="Italy">Italy</option>
        </select>

        <button type="submit" value="Submit" class="btn">
          Update
        </button>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onclick={clear}>
              Clear
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};
export default userForm;
