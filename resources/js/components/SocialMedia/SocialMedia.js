import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FB, IG } from "/img/icons/sm/smIcons";

export const SocialMedia = ({ color, gfacebook, ginstagram }) => {
  return (
    <div className="socialmedia flex">
      <a target="_blank" href={gfacebook}>
        <FB color={color} />
      </a>
      <a target="_blank" href={ginstagram} style={{ marginLeft: "30px" }}>
        <IG color={color} />
      </a>
    </div>
  );
};
