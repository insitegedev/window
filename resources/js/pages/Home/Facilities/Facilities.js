import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import "./Facilities.css";

const Facilities = () => {
    const sharedData = usePage().props.localizations;

    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }

    const facilityList = [
        {
            icon: "/img/icons/home/bell.svg",
            name: __("recipient_recreation"),
        },
        {
            icon: "/img/icons/home/spa.svg",
            name: __("spa_aesthetics"),
        },
        {
            icon: "/img/icons/home/parking-area.svg",
            name: __("parking_area"),
        },
        {
            icon: "/img/icons/home/tree.svg",
            name: __("recreation_area_with_kids_playground"),
        },
        {
            icon: "/img/icons/home/pool.svg",
            name: __("cafe_restaurant"),
        },
        {
            icon: "/img/icons/home/cctv-camera.svg",
            name: __("video_monitoring"),
        },
        {
            icon: "/img/icons/home/secure-shield.svg",
            name: __("security_service"),
        },
        {
            icon: "/img/icons/home/key.svg",
            name: __("rental_and_hotel_services"),
        },
    ];
    return (
        <div className="facilities">
            {facilityList.map((Facility) => {
                return (
                    <Link
                        href={route("client.service.index")}
                        className="flex"
                        data-aos="fade-up"
                    >
                        <img src={Facility.icon} alt="" />
                        <div>{Facility.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Facilities;
