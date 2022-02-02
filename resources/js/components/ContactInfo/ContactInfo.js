import React from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./ContactInfo.css";

const ContactInfo = ({ color, right }) => {
  return (
    <div
      className={right ? "contact_info right" : "contact_info"}
      style={{ color: color }}
    >
      <div className="title">address</div>
      <p>Street Name #</p>
      <p>Bakuriani</p>
      <p>Georgia</p>
      <div className="title">contact</div>
      <p>Info@Window.Ge</p>
      <p>+995 032 2 22 33 11</p>
      <SocialMedia color={color} />
    </div>
  );
};

export default ContactInfo;
