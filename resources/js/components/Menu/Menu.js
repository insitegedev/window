import React from "react";
import { Languages } from "../Languages/Languages";
import "./Menu.css";
import { MainButton } from "../Buttons/Buttons";
import { Link, usePage } from "@inertiajs/inertia-react";
import ContactInfo from "../ContactInfo/ContactInfo";

const Menu = ({ openMenu, linkClicked }) => {
    const sharedData = usePage().props.localizations;


    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation;
    }
    const { pathname } = usePage().props;
    let darkBg = true;
    if (pathname === route("client.home.index")) {
        darkBg = false;
    }
    console.log( __("choose_apartment"));
    const navbar = [
        {
            name: __("home"),
            path: route("client.home.index"),
        },
        {
            name: __("choose_apartment"),
            path: route("client.choosefloor.index"),
        },
        {
            name: __("about_us"),
            path: route("client.about.index"),
        },
        {
            name: __("services"),
            path: route("client.service.index"),
        },
        {
            name: __("gallery"),
            path: route("client.gallery.index"),
        },
        {
            name: __("contact_us"),
            path: route("client.contact.index"),
        },
    ];
    return (
        <div className={openMenu ? "menu open" : "menu  "}>
            <div className="flex container">
                <div
                    className="left"
                    style={{
                        backgroundColor: darkBg
                            ? "rgba(51, 78, 96, 0.568)"
                            : "transparent",
                    }}
                >
                    <div className="flex top">
                        <Languages />
                        <MainButton link={route('client.contact.index')} text={__("contact_us")} />
                    </div>
                    <div className="flex bottom">
                        <ContactInfo color="#fff" />
                        <div className="navigation">
                            {navbar.map((link) => {
                                return (
                                    <Link
                                        onClick={linkClicked}
                                        className={
                                            link.path === pathname
                                                ? "active"
                                                : ""
                                        }
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="right flex centered">
                    <img src="/img/logo/logo.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Menu;
