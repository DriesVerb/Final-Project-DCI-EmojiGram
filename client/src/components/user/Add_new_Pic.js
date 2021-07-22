// import React from 'react';
// import { useState} from 'react';
// import axios from 'axios';



// function AddNew() {
//   const [picture, setPicture] = useState();
//   const [newPicture, setNewPicture] = useState();
  
 

//   // this function will update picture data
//   const choosePic = (event) => {
//     setPicture(event.target.files[0]);
//   };


//   // add picture data to backend
//   const add = (event) => {
//     event.preventDefault();
//     // console.log(picture);
//     // collect all data from  the form
//     const formData = new FormData(); // create instance of a object for html form
//     formData.append('profilePics', picture); // add picture to formData object



//     // configuaration for file type input
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post('/profile/profile', formData, config).then((response) => {
//       //   const successMsg = response.d
//       //   setSuccessMsg(response.data);
//       // console.log(response.data.profilePics);
//       setNewPicture(response.data.profilePics);
 
//     });
//   };

//   return (
   
//       <div className='profile-header'>
//         <h3 className='profile-header_upload'>
//           Upload Picture to your Profile
//         </h3>
//         {newPicture && (
//           <img
//             className='img_profile'
//             style={{ width: 150, height: 150 }}
//             src={newPicture}
//             alt='Upload picture'
//           />
//         )}
//         <form className='profile-header_add' onSubmit={add}>
//           <input
//             className='profile-header_input'
//             type='file'
//             accept='image/*'
//             name='profilePics'
//             id='fileLoading'
//             alt=''
//             onChange={choosePic}
            
//           />

//           <button className='btn btn-add' type='submit'>
//             Add to your profile
//           </button>
//         </form>
//       </div>
    
//   );
// }

// export default AddNew;
