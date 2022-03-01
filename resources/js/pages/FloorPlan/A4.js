import { Link, Head, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { ArrowRight } from "/img/icons/sm/smIcons";
import { BackButton } from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";
import Layout from "../../Layouts/Layout";
import Background from "/img/apartments/bg.png";
import "./floorPlan.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ChooseFloor = ({ urlPrev, apartments }) => {
    const sharedData = usePage().props.localizations;

    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }

    const flatList = [
        {
            link: "/",
            points: " 485.8,374 485.8,18 535.1,18 535.1,24.2 619.5,24.2 619.5,18 700,18 700,25.6 780,25.6 780,18 823.6,18 823.6,50.4 817.4,50.4 798.3,82.4 811.1999999999999,87.30000000000001 817.4,87.30000000000001 817.4,409.1 652.9,409.1 652.9,370.90000000000003 628.1999999999999,370.90000000000003 628.1999999999999,365.3 518.7,365.3 518.7,371.5 499.6,371.5 499.6,373.9 485.8,373.9",
            dimensions: "Flat 1 / 35.6",
        },

        {
            link: "/",
            points: "817.3,409.1 817.3,87.3 847.6,87.3 847.6,93.1 878.2,110 882.4,97.1 882.4,87.3 981.3,87.3  981.3,409.1 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "981.3,409.1 981.3,87.3 1084.6,87.3 1084.6,98.6 1087.6,111 1118.4,95 1118.4,87.3 1145.6,87.3  1145.6,409.1",
            dimensions: "Flat 3 / 35.6",
        },
        {
            link: "/",
            points: "1145.6,409.1 1145.6,87.3 1174.7,87.3 1174.7,93.3 1205.5,109.3 1210.8,97.4 1210.8,87.3 1309.2,87.3  1309.2,409.1 ",
            dimensions: "Flat 5 / 35.6",
        },
        {
            link: "/",
            points: "1309.2,409.1 1309.2,87.3 1412.4,87.3 1412.4,98.6 1415.4,111 1446.2,95 1446.2,87.3 1478.4,87.3 1478.4,364 1473.5,364.2 1473.5,409.1 ",
            dimensions: "Flat 4 / 35.6",
        },

        {
            link: "/",
            points: "1473.5,409.1 1473.5,364.2 1478.4,364.2 1478.4,125.3 1503,125.3 1503,130 1533.8,145.4 1537.9,132.4 1537.9,125.3 1679,125.3 1679,371.8 1636.9,371.8 1636.9,409.1  ",
            dimensions: "Flat 6 / 35.6",
        },
    ];
    const [flatIndex, setFlatIndex] = useState(0);

    return (
        <Layout>
            <div className="floorPlan">
                <img className="background" src={Background} alt="" />
                <Showcase short />
                <BackButton
                    color="#1B2D39"
                    link={urlPrev}
                    text={__("go_back")}
                />
                <div className="head">
                    <div className=" block">{__("a_block")}</div>
                    <div className="flex centered">
                        <Link
                            href={route('client.showFloor.index', "A3")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route('client.showFloor.index', "B2")}>
                            <ArrowRight color="#334E60" />
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1750 450"
                        style={{ enableBackground: "new 0 0 1750 450" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="1710"
                            height="423"
                            xlinkHref="/img/floorplan/A4.png"
                            transform="matrix(1 0 0 1 20 13.5)"
                        ></image>
                        {apartments.floors.map((flat, index) => {
                            return (
                                <Tippy
                                    maxWidth="0"
                                    arrow={false}
                                    content={
                                        <button
                                            style={{
                                                transform:
                                                    "var(--tooltip-position)",
                                                width: "180px",
                                                height: "50px",
                                                borderRadius: "5px",
                                                background: "#fff",
                                                boxShadow:
                                                    "0 3px 6px #1111111c",
                                                color: "#334E60",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {flat.dimension} <sup>2</sup>
                                        </button>
                                    }
                                >
                                    <Link
                                        href={route("client.apartment.index", flat.slug)}
                                        onMouseEnter={() =>
                                            setFlatIndex(index + 1)
                                        }
                                        onMouseLeave={() => setFlatIndex(0)}
                                    >
                                        <polygon
                                            dataText="sdjnfskd"
                                            key={index}
                                            className="st0"
                                            points={flat.points}
                                        />
                                    </Link>
                                </Tippy>
                            );
                        })}
                    </svg>
                </div>
            </div>
        </Layout>
    );
};

export default ChooseFloor;
