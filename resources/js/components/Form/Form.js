import React from "react";
import { MainButton } from "../Buttons/Buttons";
import "./Form.css";
import {usePage} from "@inertiajs/inertia-react";

const Form = () => {
    const sharedData = usePage().props.localizations;


    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation;
    }
  return (
    <div className="form">
      <p>{__("have_any_questions")}</p>
      <div className="playfair">{__("write_to_us")}</div>
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
