import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form
        method="POST"
        action="https://getform.io/f/bb8cbb82-a9c6-4952-80eb-00d52edbf04c"
      >
        <label>Your Name</label>
        <input type="text" placeholder="Name" name="name" />
        <label>Email</label>
        <input type="email" placeholder="Email" name="email" />
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
