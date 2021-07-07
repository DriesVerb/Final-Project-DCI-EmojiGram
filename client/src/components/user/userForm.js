import React, { useState, Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";
import { Button, Col } from "react-bootstrap";
const userForm = (props) => {
  const profileContext = useContext(ProfileContext);
  const { current, clearAll, editProfile } = profileContext;
  

  useEffect(() => {
    console.log(current);
    if (current !== null) setUser(current);
   
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
    console.log(user);
    props.history.push("/profile");
  };

  const clear = () => {
    clearAll();
  };

  return (
    <Fragment >
       <div className="d-flex justify-content-center row-hl">
       <div className ="d-flex flex-column row-hl">
        <p className="lead ">
        <i className="fas fa-user mr-2 " />
           Add some changes to your profile
        </p>
      <h3 className="text-info p-4 item-hl">Update Profile</h3>
      <form className="form" onSubmit={onSubmit}>


        <div className="form-group ">
    
        <div className="form-group d-flex"> 
        <Col>  <label htmlFor="userName">User Name</label> </Col>
        <Col>  <input
          type="text"
          name="username"
          placeholder="User name..."
          defaultValue={username}
          onChange={onChange}
        /> </Col> 
          </div>

 
          <div className="form-group d-flex">
          <Col> <label htmlFor="name">Name</label></Col> 
       <Col> <input
          type="text"
          name="name"
          placeholder="Name..."
          defaultValue={name}
          onChange={onChange}
        /></Col> 
          </div>
          

      <div className="form-group d-flex">
      <Col> <label htmlFor="email">Email</label></Col> 
      <Col>  <input
          type="text"
          name="email"
          placeholder="enter email..."
          defaultValue={email}
          onChange={onChange}
        /></Col> 
          </div>
          
{/* 
          <div className="form-group d-flex">
          <Col>  <label htmlFor="password">Password</label></Col> 
          <Col> <input
          type="text"
          name="password"
          placeholder={password}
          defaultValue="*****"
          onChange={onChange}
        /></Col> 
          </div> */}
               <a className="nav-link text-info " href="#!">
                Click to edit your Password
              
              </a>

          <div className="form-group d-flex">
          <Col> <label htmlFor="age">Age</label></Col> 
          <Col><input
          type="text"
          name="age"
          placeholder="age..."
          defaultValue={age}
          onChange={onChange}
        /></Col> 
          </div>

          <div className="form-group d-flex">
          <Col> <label htmlFor="location">Location</label></Col> 
           
              
          <Col>  <select
          id="location"
          name="location"
          defaultValue={location}
          onChange={(e) => onChange(e)}
        ><option defaultValue="select on" > </option>
          <option defaultValue="Australia">Australia</option>
          <option defaultValue="Germany">Germany</option>
          <option defaultValue="Canada">Canada</option>
          <option defaultValue="USA">USA</option>
          <option defaultValue="Spain">Spain</option>
          <option defaultValue="France">France</option>
          <option defaultValue="UK">UK</option>
          <option defaultValue="Italy">Italy</option>
            </select></Col> 
          </div>
      
            <Button variant="info" className="btn btn-info btn-block" type="submit">
              Update
            </Button>

        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clear}>
              Clear
            </button>
          </div>
          )}
          </div>
      </form></div></div>
    </Fragment>
  );
};
export default userForm;
