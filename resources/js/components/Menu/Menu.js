import React from "react";
import { Languages } from "../Languages/Languages";
import "./Menu.css";
import { MainButton } from "../Buttons/Buttons";
import {Link, usePage} from "@inertiajs/inertia-react";
import ContactInfo from "../ContactInfo/ContactInfo";

const Menu = ({ openMenu, linkClicked }) => {
    const { pathname } = usePage().props
  let darkBg = true;
  if (pathname === route("client.home.index")) {
    darkBg = false;
  }
  const navbar = [
    {
      name: "Home",
      path: route("client.home.index"),
    },
    {
      name: "Choose Apartment",
      path: route('client.apartment.index'),
    },
    {
      name: "About Us",
      path: route('client.about.index'),
    },
    {
      name: "Services",
      path: route('client.service.index'),
    },
    {
      name: "Gallery",
      path: route('client.gallery.index'),
    },
    {
      name: "Contact Us",
      path: route('client.contact.index'),
    },
  ];
  return (
    <div className={openMenu ? "menu open" : "menu  "}>
      <div className="flex container">
        <div
          className="left"
          style={{
            backgroundColor: darkBg ? "rgba(51, 78, 96, 0.568)" : "transparent",
          }}
        >
          <div className="flex top">
            <Languages />
            <MainButton link="/" text="contact us" />
          </div>
          <div className="flex bottom">
            <ContactInfo color="#fff" />
            <div className="navigation">
              {navbar.map((link) => {
                return (
                  <Link
                    onClick={linkClicked}
                    className={link.path === pathname ? "active" : ""}
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
