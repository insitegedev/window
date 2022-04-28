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

export const BackButton = ({ link, color, text }) => {
    return (
        <Link href={link == link ? "contact" : link}>
            <button className="back_button flex centered">
                <div
                    className="circle"
                    style={{ borderColor: color, transform: "rotate(180deg)" }}
                >
                    <ArrowRight color={color} />
                </div>
                <div className="text" style={{ color: color }}>
                    {/* {text} */}
                    asdasd
                </div>
            </button>
        </Link>
    );
};
