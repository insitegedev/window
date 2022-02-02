import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FB, IG } from "/img/icons/sm/smIcons";

export const SocialMedia = ({ color }) => {
  return (
    <div className="socialmedia flex">
      <Link href="/">
        <FB color={color} />
      </Link>
      <Link href="/" style={{ marginLeft: "30px" }}>
        <IG color={color} />
      </Link>
    </div>
  );
};
