import React from "react";
import { motion } from "framer-motion";
import "./Contact.scss";
import Images from '../../constants/Images.js';

const Contact = () => {
  return (
    <div className="app__contact-section">
    <motion.div
    whileInView={{ y: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
     className="app__contact">
      <div className="app__contact-label">
        <h4>Start your courses! <span>Try now for free</span></h4>
        <h1>Are you ready to work faster?</h1>
      </div>

      <div className="app__contact-form">
      <h2>Apply Now</h2>
      <div className="app__form-circle"/>
        <form>
          <input className="app__contact-input" type="text" id="fname" name="fname" placeholder="First Name" />
          <br />
          <input className="app__contact-input" type="text" id="lname" name="lname" placeholder="Last Name"/>
          <br/>
          <input className="app__contact-input" type="email" id="email" name="email" placeholder="Email Address"/>
          <br/>
          <input className="app__contact-input" type="password" id="password" name="password" placeholder="Choose Password"/>
          <br/>
          <input className="app__contact-input" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
          <br/>
          <div className="app__contact-agree">
          <input type="radio" id="agree" name="agree" value="JavaScript" />
          <label for="agree"> I agree with the terms and conditions</label>
          </div>
          <div className="app__contact-btn">
          <button type="button">Apply Now</button>
          <p>or call us<br/><span>+49 123 456 789</span></p>
          </div>

          <a src="#" alt="signin" className="app__contact-ac">I already have an account</a>
        </form>
      </div>
    </motion.div>

    <div className="app__contact-bg">
    <img src={Images.Girl} alt="Girl"/>
    <img src={Images.Boy} alt="Boy" />
    </div>
    </div>
  );
};

export default Contact;
