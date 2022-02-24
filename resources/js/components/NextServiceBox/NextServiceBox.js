import React from "react";
import { MainButton } from "../Buttons/Buttons";
import "./NextServiceBox.css";
import {usePage} from "@inertiajs/inertia-react";

export const NextServiceBox = (props) => {
    const sharedData = usePage().props.localizations;


    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation;
    }
  return (
    <div
      className="next_service_box"
      style={{ background: `url(${props.background})` }}
      data-aos="flip-right"
    >
      <img className="icon" src={props.icon} alt="" />
      <p>{props.title}</p>
      <MainButton dark link={props.link} text={__("learn_more")} />
    </div>
  );
};
