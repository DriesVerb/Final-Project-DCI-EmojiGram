import React, { useState, useContext, useEffect, Fragment } from "react";
import ProfileContext from "../context/profile/profileContext";

const editProfile = () => {
  const profileContext = useContext(ProfileContext);

  const { users } = profileContext;

  const { username, name, email, password, age, location } = profile;

  const onChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    profileContext.editProfile(profile);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <p> PROFILE</p>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username..."
          onChange={onChange}
        />

        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name..."
          onChange={onChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email..."
          value={email}
          onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={onChange}
        />

        <label htmlFor="location">Location</label>
        <select name="location" value={location} onChange={(e) => onChange(e)}>
          <option value="France">France</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Austria">Austria</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
        </select>

        <label htmlFor="age">Age</label>
        <input type="text" name="age" value={age} onChange={onChange} />
        <button type="submit">Edit Profile</button>
      </form>
    </Fragment>
  );
};
export default editProfile;
