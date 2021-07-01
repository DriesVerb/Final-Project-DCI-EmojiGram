import React, { Fragment, useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';

<<<<<<< HEAD
const UserItem = () => {
=======
const UserItem = (props) => {
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile} =
    profileContext;

  useEffect(() => {
    
      
    { !user ? (props.history.push("/")) : getProfile(_id); }
    // eslint-disable-next-line
  }, []);

  const onEdit = () => {
    setCurrent(user);
    props.history.push("/userform");

  
  };

  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };
  const { _id, name, username, email, age, location, password } = user;
  return (
    <Fragment>
      <ul>
        {username && (
          <li> {username.charAt(0).toUpperCase() + username.slice(1)}</li>
        )}
      </ul>
      <ul>
        {name && <li> {name.charAt(0).toUpperCase() + name.slice(1)}</li>}
      </ul>
      <ul>{email && <li> {email}</li>}</ul>
      <ul>
        {location && (
          <li> {location.charAt(0).toUpperCase() + location.slice(1)}</li>
        )}
      </ul>
      {/* <ul>
        {password && (
          <li> {password}</li>)}
      
      </ul> */}
      <ul>{age && <li> {age}</li>}</ul>

      <p>
        <button
<<<<<<< HEAD
          type='submit'
          className='btn btn-dark btn-sm ml-3'
          onClick={() => setCurrent(user)}>
          Edit
        </button>
        <button
          type='submit'
          value='Submit'
          className='btn btn-danger btn-sm ml-5'
          onClick={onDelete}>
=======
          type="submit"
          className="btn btn-dark btn-sm ml-3"
          onClick={onEdit}
        >
          Edit
        </button>
      <button
          type="submit"
          value="Submit"
          className="btn btn-danger btn-sm ml-5"
          onClick={onDelete}
        >
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae
          Delete
        </button>
      </p>
    </Fragment>
  );
};

export default UserItem;
