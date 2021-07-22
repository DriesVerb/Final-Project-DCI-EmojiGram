import React, { Fragment, useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";
import YourStories from "../story/yourStories";
import { Link } from "react-router-dom";



const UserItem = (props) => {
  
  const profileContext = useContext(ProfileContext);
  const { user, deleteProfile, setCurrent, clearCurrent, getProfile } =
    profileContext;
    const [picture, setPicture] = useState();
    const [newPicture, setNewPicture] = useState();

    // this function will update picture data
    const choosePic = (event) => {
      setPicture(event.target.files[0]);
    };

    // add picture data to backend
    const add = (event) => {
      event.preventDefault();
      // console.log(picture);
      // collect all data from  the form
      const formData = new FormData(); // create instance of a object for html form
      formData.append('profilePics', picture); // add picture to formData object

      // configuaration for file type input
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post('/profile/profile', formData, config).then((response) => {
        //   const successMsg = response.d
        //   setSuccessMsg(response.data);
        // console.log(response.data.profilePics);
        setNewPicture(response.data.profilePics);
      });
    };

    const { _id, username, email, age, location, followers, following } = user;
  useEffect(() => {
    !user ? props.history.push('/') : getProfile(_id);


    // eslint-disable-next-line
  }, []);

  const onEdit = () => {
    setCurrent(user);
    props.history.push('/userform');
  };

  const onDelete = () => {
    deleteProfile(_id);
    clearCurrent();
  };
  

  return (
    <Fragment>
      <div className='col-md-7 mx-auto'>
        <div className='bg-white shadow rounded overflow-hidden'>
          <div className='px-4 pt-5 pb-4 '>
            <div className='row align-items-start'>
              <div className='profile mr-3 col-3 '>
                <div className='profile-header'>
                  <h3 className='profile-header_upload'>
                    Upload Picture to your Profile
                  </h3>
                  {newPicture && (
                    <img
                      className='img_profile'
                      style={{ width: 150, height: 150 }}
                      src={newPicture}
                      alt='Upload picture'
                    />
                  )}
                  <form className='profile-header_add' onSubmit={add}>
                    <input
                      className='profile-header_input'
                      type='file'
                      accept='image/*'
                      name='profilePics'
                      id='fileLoading'
                      alt=''
                      onChange={choosePic}
                    />

                    <button className='btn btn-add' type='submit'>
                      Add to your profile
                    </button>
                  </form>
                </div>
              </div>

              {/* 
              <div className='label'>
                <label className='image-upload' htmlFor='input'>
                  <i className='material-icons'>add_photo_alternate</i>
                  Choose your Photo
                </label>
              </div> */}
              <div className='media-body mb-5 text-dark  col'>
                {username && (
                  <h4>
                    {' '}
                    {username.charAt(0).toUpperCase() + username.slice(1)}
                  </h4>
                )}
                {email && (
                  <p className='small mb-4 mt-3'>
                    {' '}
                    <i className='fas fa-paper-plane mr-2'></i>
                    {email}
                  </p>
                )}
                {/*         
        {location && ( */}
                {/* <p className="small mb-4"> */}{" "}
                {/* <i className="fas fa-map-marker-alt mr-2"></i> Berlin */}
                {/* {location.charAt(0).toUpperCase() + location.slice(1)} */}
                {/* </p> */}
                {/* )} */}
                {location && (
                  <p className='small mb-4'>
                    {' '}
                    <i className='fas fa-map-marker-alt mr-2'></i>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </p>
                )}
                <div className='d-flex flex-start m-0 p-0'>
                  <button
                    type='submit'
                    className='btn btn-dark btn-lg '
                    onClick={onEdit}>
                    Edit
                  </button>
                  <button
                    type='submit'
                    value='Submit'
                    className='btn btn-info  ml-2 btn-lg'
                    onClick={onDelete}>
                    Delete
                  </button>
                </div>
              </div>

              <div className='bg-light p-4 d-flex justify-content-end text-center col-4 mr-3 '>
                <ul className='list-inline mb-0 '>
                  <li className='list-inline-item p-3'>
                    {followers && (
                      <h5 className='font-weight-bold mb-0 d-block'>
                        {followers.length}
                      </h5>
                    )}
                    <small className='text-muted'>
                      {' '}
                      <i className='fas fa-book mr-1'></i>Stories
                    </small>
                  </li>

                  <li className='list-inline-item p-4'>
                    {followers && (
                      <h5 className='font-weight-bold mb-0 d-block'>
                        {followers.length}
                      </h5>
                    )}

                    <small className='text-muted'>
                      {' '}
                      <i className='fas fa-user mr-1'></i>Followers
                    </small>
                  </li>

                  <li className='list-inline-item'>
                    {following && (
                      <h5 className='font-weight-bold mb-0 d-block'>
                        {followers.length}
                      </h5>
                    )}

                    <small className='text-muted'>
                      {' '}
                      <i className='fas fa-user mr-1'></i>Following
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='px-4 py-3'>
            <h5 className='mb-0'>About</h5>
            <div className='p-4 rounded shadow-sm bg-light'>
              <p className='font-italic mb-0'>Web Developer</p>
              <p className='font-italic mb-0'>Lives in Berlin</p>
              <p className='font-italic mb-0'>Artist</p>
              {age && <p className='font-italic mb-0'> {age}</p>}
            </div>{' '}
            <Link to='/yourstories' className='link'>
              <button className='btn btn-secondary btn-lg btn-block '>
                Stories{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserItem;
