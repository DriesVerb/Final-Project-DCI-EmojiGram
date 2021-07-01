import React from "react";
import axios from "axios";
import { useState } from "react";

function Contactus() {
  const [stateEmail, setStateEmail] = useState({
    username: "",
    message: "",
    email: "",
    confirm: "",
  });

  // get form values
  const getValue = (event) => {
    setStateEmail({
      ...stateEmail,
      [event.target.name]: event.target.value,
    });
  };
  const [msg, setmsg] = useState();

  // send email data to backend
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(stateEmail);
    axios.post("/sendEmail", stateEmail).then((res) => {
      const successMsg = res.data;
      setmsg(successMsg);
      setStateEmail({
<<<<<<< HEAD:client/src/components/ContactUs.js
        username: '',
        message: '',
        email: '', 
        confirm:
          'Thank you!!! An Email confirmation has been sent to your mailbox.'
=======
        username: "",
        message: "",
        email: "",
        confirm:
          "Thank you!!! An Email has been sent to your mailbox. Thank you to follow the steps to contact our Support Team",
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/pages/ContactUs.js
      });
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={sendEmail}>
          {msg && (
            <div className="alert alert-success">
              <h4>{msg}</h4>
            </div>
          )}
        </form>
        <form onSubmit={sendEmail}>
          <label>Username</label>
          <input
            type="text"
            onChange={getValue}
            name="username"
            value={stateEmail.username}
            required
          />

          <label> Your Message:</label>
          <textarea
            type="textarea"
            onChange={getValue}
            name="message"
            value={stateEmail.message}
<<<<<<< HEAD:client/src/components/ContactUs.js
            required
=======
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/pages/ContactUs.js
          />

          <label onSubmit={sendEmail}>Your Email</label>
          <input
<<<<<<< HEAD:client/src/components/ContactUs.js
            type='email'
=======
            type="text"
>>>>>>> d880ec3b067df5dae1cbd17fb402fb79d68a63ae:client/src/components/pages/ContactUs.js
            onChange={getValue}
            name="email"
            value={stateEmail.email}
            required
          />

          <button className="btn btn-success" type="submit">
            Contact Us
          </button>
          <form>
            <span
              className="confirm alert-success"
              onSubmit={stateEmail.confirm}
            >
              {stateEmail.confirm}
            </span>
          </form>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
