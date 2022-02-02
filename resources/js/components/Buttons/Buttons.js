import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { ArrowRight } from "/img/icons/sm/smIcons";
import "./Buttons.css";

export const MainButton = ({ text, link, dark }) => {
  return (
    <Link href={link}>
      <button className={dark ? "main_button dark" : "main_button"}>
        {text}
      </button>
    </Link>
  );
};

export const ArrowButton = ({ color, link }) => {
  return (
    <Link href={link}>
      <div className="arrow_button flex centered">
        <div className="text" style={{ color: color }}>
          CHOOSE APARTMENT
        </div>
        <div className="circle" style={{ borderColor: color }}>
          <ArrowRight color={color} />
        </div>
      </div>
    </Link>
  );
};

export const BackButton = ({ link, color }) => {
  return (
    <Link href={link}>
      <button className="back_button flex centered">
        <div
          className="circle"
          style={{ borderColor: color, transform: "rotate(180deg)" }}
        >
          <ArrowRight color={color} />
        </div>
        <div className="text" style={{ color: color }}>
          Go back
        </div>
      </button>
    </Link>
  );
};
