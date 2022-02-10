import React from "react";
import { MainButton } from "../Buttons/Buttons";
import Insite from "/img/logo/insite/1.svg";
import "./Footer.css";
import { usePage } from "@inertiajs/inertia-react";

const Footer = () => {
    const sharedData = usePage().props.localizations;


    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation;
    }
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
                <div className="playfair">{__("choose_your_apartment")}</div>
                <p>
                    {__("choose_your_apartment_description")}
                </p>
                <MainButton text={__('learn_more')} link={route('client.choosefloor.index')} />
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
