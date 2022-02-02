import React from "react";

import "./Facilities.css";

const Facilities = () => {
  const facilityList = [
    {
      icon: "/img/icons/home/bell.svg",
      name: "Recipient / Reception",
    },
    {
      icon: "/img/icons/home/spa.svg",
      name: "Spa & Aesthetics Center",
    },
    {
      icon: "/img/icons/home/parking-area.svg",
      name: "Parking Area",
    },
    {
      icon: "/img/icons/home/tree.svg",
      name: "Recreation Area With Kids Playground",
    },
    {
      icon: "/img/icons/home/coffee-cup.svg",
      name: "Café / Restaurant",
    },
    {
      icon: "/img/icons/home/cctv-camera.svg",
      name: "24/7 Video Monitoring",
    },
    {
      icon: "/img/icons/home/secure-shield.svg",
      name: "Security Service",
    },
    {
      icon: "/img/icons/home/key.svg",
      name: "Rental And Hotel Services",
    },
  ];
  return (
    <div className="facilities">
      {facilityList.map((Facility) => {
        return (
          <div className="flex" data-aos="fade-up">
            <img src={Facility.icon} alt="" />
            <div>{Facility.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Facilities;
