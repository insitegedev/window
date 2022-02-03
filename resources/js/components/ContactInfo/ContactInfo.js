import React from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./ContactInfo.css";
import {usePage} from "@inertiajs/inertia-react";

const ContactInfo = ({ color, right }) => {

    const {gphone, gemail, gaddress, gcity, gcountry, gfacebook, ginstagram} = usePage().props;

    return (
    <div
      className={right ? "contact_info right" : "contact_info"}
      style={{ color: color }}
    >
      <div className="title">address</div>
      <p>{gaddress.value}</p>
      <p>{gcity.value}</p>
      <p>{gcountry.value}</p>
      <div className="title">contact</div>
      <p>{gemail.value}</p>
      <p>{gphone.value}</p>
      <SocialMedia color={color} ginstagram={ginstagram.value} gfacebook={gfacebook.value} />
    </div>
  );
};

export default ContactInfo;
