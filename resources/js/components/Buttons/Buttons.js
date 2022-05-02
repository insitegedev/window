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

export const ArrowButton = ({ color, link, text }) => {
    return (
        <Link href={link}>
            <div className="arrow_button flex centered">
                <div className="circle" style={{ borderColor: color }}>
                    <ArrowRight color={color} />
                </div>
                <div className="text" style={{ color: color }}>
                    {text}
                </div>
            </div>
        </Link>
    );
};
let base_url = window.location.origin,
    linksBase = {
        "home": base_url,
        "singlePage": [
            "about", "service", "gallery", "contact", "choose-floor"
        ],
        "apartamant": [
            "choose-apartment"
        ],
        "floor": ["apartment/floor"]
    },
    link = window.location.pathname,
    a = link.split('/'),
    getFlatNumber = () => {
        if (linksBase.floor.some((e) => location.href.includes(e))) {
            let a;
            if (window.location.pathname.split('/')[3].split('_')[1].length == 1) {
                a = "A" + window.location.pathname.split('/')[3].split('_')[1];
            } else {
                a = window.location.pathname.split('/')[3].split('_')[1];
            }
            return a;
        }
    }

export const BackButton = ({ link, color, text }) => {
    return (
        <Link href={
            linksBase.singlePage.some((e) => location.href.includes(e)) ? "/" + a[1]
                : linksBase.apartamant.some((e) => location.href.includes(e)) ? "/" + a[1] + '/choose-floor'
                    : linksBase.floor.some((e) => location.href.includes(e)) ? '/' + a[1] + '/choose-apartment/' + getFlatNumber() : "#"
        } >
            <button className="back_button flex centered">
                <div
                    className="circle"
                    style={{ borderColor: color, transform: "rotate(180deg)" }}
                >
                    <ArrowRight color={color} />
                </div>
                <div className="text" style={{ color: color }}>
                    {text}
                </div>
            </button>
        </Link >
    );
};
