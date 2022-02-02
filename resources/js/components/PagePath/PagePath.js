import React from "react";
import Chevron from "/img/icons/arrows/chevron.svg";
import "./PagePath.css";

export const PagePath = ({ loc1, loc2, loc3 }) => {
  return (
    <div className="page_path flex centered">
      <p>{loc1}</p>
      <img src={Chevron} alt="" />
      <p>{loc2}</p>
      <img src={Chevron} alt="" />
      <p>{loc3}</p>
    </div>
  );
};
