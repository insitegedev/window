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
            id: "reception",
            scrollTo: "scroll_services",
            icon: "/img/icons/home/bell.svg",
            name: __("recipient_recreation"),
        },
        {
            icon: "/img/icons/home/spa.svg",
            name: __("spa_aesthetics"),
            route: route("client.service.show", 1),
        },
        {
            id: "parking",
            scrollTo: "scroll_services",
            icon: "/img/icons/home/parking-area.svg",
            name: __("parking_area"),
        },
        {
            id: "trees",
            scrollTo: "scroll_services",
            icon: "/img/icons/home/tree.svg",
            name: __("recreation_area_with_kids_playground"),
        },
        {
            id: "pool",
            icon: "/img/icons/home/pool.svg",
            name: __("cafe_restaurant"),
            route: route("client.service.show", 2),
        },
        {
            id: "camera",
            scrollTo: "scroll_services",
            icon: "/img/icons/home/cctv-camera.svg",
            name: __("video_monitoring"),
        },
        {
            id: "security",
            scrollTo: "scroll_services",
            icon: "/img/icons/home/secure-shield.svg",
            name: __("security_service"),
        },
        {
            id: "keys",
            scrollTo: "scroll_services",
            icon: "/img/icons/home/key.svg",
            name: __("rental_and_hotel_servicess"),
        },
    ];
    return (
        <div className="facilities">
            {facilityList.map((Facility) => {
                return (
                    <Link
                        href={route("client.service.index")}
                        data={{state:Facility.id}}
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
