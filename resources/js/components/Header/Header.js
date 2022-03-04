import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Languages } from "../Languages/Languages";
import Menu from "../Menu/Menu";
import "./Header.css";
import { usePage, Head } from "@inertiajs/inertia-react";

const Header = () => {
    const { pathname } = usePage().props;
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        <div
            className={
                pathname === route("") ? "header flex dark" : "header flex"
            }
            style={{ position: menu ? "fixed" : "absolute" }}
        >
            <Head>
                <title>My app</title>
                <meta head-key="description" name="description" content="This is the default description" />
                <link rel="icon" type="image/svg+xml" href="/img/apartments/1.png" />
            </Head>
            <button
                className={menu ? "menu_btn circle clicked" : "menu_btn circle"}
                onClick={() => toggleMenu()}
            >
                <span></span>
                <span></span>
            </button>
            <Link href="/" className="logo">
                <img src="/img/logo/logo.svg" alt="" />
                <img
                    className="dark-logo"
                    src="/img/logo/logo-dark.svg"
                    alt=""
                />
            </Link>
            <Languages />
            <Menu openMenu={menu} linkClicked={() => setMenu(false)} />
        </div>
    );
};

export default Header;
