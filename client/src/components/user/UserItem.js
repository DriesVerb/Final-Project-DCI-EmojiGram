import React, { Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";

const UserItem = (props) => {
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile } =
    profileContext;

  useEffect(() => {
    !user ? props.history.push("/") : getProfile(_id);

    // eslint-disable-next-line
  }, []);

  const { _id, name, username, email, age, location } = user;

  const onEdit = () => {
    setCurrent(user);
    props.history.push("/userform");
  };

  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };

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
          type="submit"
          className="btn btn-dark btn-sm ml-5"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          type="submit"
          value="Submit"
          className="btn btn-info btn-sm ml-2"
          onClick={onDelete}
        >
          Delete
        </button>
      </p>
    </Fragment>
  );
};

export default UserItem;
