import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Languages } from "../Languages/Languages";
import Menu from "../Menu/Menu";
import "./Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div
      className="header flex"
      style={{ position: menu ? "fixed" : "absolute" }}
    >
      <button
        className={menu ? "menu_btn circle clicked" : "menu_btn circle"}
        onClick={() => toggleMenu()}
      >
        <span></span>
        <span></span>
      </button>
      <Link href="/" className="logo">
        <img src="/img/logo/logo.svg" alt="" />
      </Link>
      <Languages />
      <Menu openMenu={menu} linkClicked={() => setMenu(false)} />
    </div>
  );
};

export default Header;
