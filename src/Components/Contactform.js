import React from "react";
import './css/contactform.css'

const ContactForm = () => {
    return(<div class="container" className="contactform" id="contactform">
    <h1>Contact Me</h1>
    <p className="sub-heading">Get In Touch With Me Here: </p>
    <form target="_blank" action="https://formsubmit.co/tinashejsibanda@gmail.com" method="POST">
      <div class="form-group" className="Form1">
        <div class="form-row">
          <div class="col">
            <input type="text" name="name" class="form-control" placeholder="Full Name" required />
          </div>
          <div class="col">
            <input type="email" name="email" class="form-control" placeholder="Email Address" required />
          </div>
        </div>
      </div>
      <div class="form-group" className="Form1">
        <br></br>
        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
      </div>
      <br></br>
      <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
    </form>
  </div>)
}

export default ContactForm;