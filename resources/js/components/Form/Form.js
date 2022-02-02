import React from "react";
import { MainButton } from "../Buttons/Buttons";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <p>Have any questions or suggestions?</p>
      <div className="playfair">Write To Us</div>
      <div className="grid">
        <input type="text" placeholder="Name & Surname" />
        <input type="tel" placeholder="Phone Number" />
      </div>
      <input type="text" placeholder="Email address" />
      <textarea placeholder="Message here"></textarea>
      <MainButton text="Send" link="/" dark />
    </div>
  );
};

export default Form;
