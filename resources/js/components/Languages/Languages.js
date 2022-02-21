import React from "react";
import {Link, usePage} from "@inertiajs/inertia-react";
import "./Languages.css";

export const Languages = () => {
    const {locales, currentLocale, locale_urls} = usePage().props;
    console.log(currentLocale);


    return (
    <div className="languages">
      <div className="on flex centered">
          {Object.keys(locales).map((name, index) => {
              if (locales[name] === currentLocale) {
                  return (
                      <a href={locale_urls[name]} key={name + "locale"}>{name}</a>
                  );
              }
          })}
      </div>
      <div className="drop">
          {Object.keys(locales).map((name, index) => {
              if (locales[name] !== currentLocale) {
                  return (
                      <a href={locale_urls[name]} key={name + "locale"}>{name}</a>
                  );
              }
          })}
      </div>
    </div>
  );
};
