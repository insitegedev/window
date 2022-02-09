import React from "react";
import { MainButton } from "../Buttons/Buttons";
import Insite from "/img/logo/insite/1.svg";
import "./Footer.css";
import { usePage } from "@inertiajs/inertia-react";

const Footer = () => {
    const { pathname } = usePage().props;
    return (
        <div
            className="footer"
            style={{
                display:
                    pathname === route("client.home.index") ? "none" : "block",
            }}
        >
            <div
                className="body"
                style={{
                    display:
                        pathname === route("client.choosefloor.index")
                            ? "none"
                            : "block",
                }}
            >
                <div className="playfair">Choose Your Apartment</div>
                <p>
                    With our 3d model you can easily choose the apartment you
                    would like to buy
                </p>
                <MainButton text="Learn more" link="/" />
            </div>
            <div className="insite flex centered">
                <div>Designed by</div>
                <a href="https://insite.ge/" target="_blank">
                    <img src="/img/logo/insite/1.svg" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
