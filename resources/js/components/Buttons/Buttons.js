import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { ArrowRight } from "/img/icons/sm/smIcons";
import "./Buttons.css";
import { useNavigate } from "react-router-dom"

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


// const navigate = useNavigate()
var base_url = window.location.origin;


const onClickHandler = () => {
    // set base url of website manually includes and href
    let link = history.state.props.urlPrev;
    if (link.includes(base_url)) {
        window.history.back()
    } else {
        window.location.href = base_url;
    }
    // window.history.back();
};

export const BackButton = ({ link, color, text }) => {
    return (
        // <Link href={link ?? "#"}>
        <button className="back_button flex centered" onClick={() => { onClickHandler() }} >
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
        // </Link>
    );
};
