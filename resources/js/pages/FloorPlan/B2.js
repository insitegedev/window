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

const ChooseFloor = ({ urlPrev }) => {
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
            points: " 1237.2,149.9 1348,149.9 1348,21.3 1604,21.3 1604,282.3 1237.2,282.3 1237.2,264 1241,264  1252.3,239.7 1243.7,236.1 1237.2,236.1",
            dimensions: "Flat 1 / 35.6",
        },
        {
            link: "/",
            points: "1237.2,282.3 1604,282.3 1604,409.4 1237.2,409.4 1237.2,329.4 1240.9,329.4 1250.7,324.6 1239.6,300  1237.2,300 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "1237.2,409.4 1604,409.4 1604,533 1595.6,533 1595.6,564.1 1484.9,564.1 1484.9,546.8 1426.7,546.8  1426.7,537.4 1237.2,537.4 1237.2,513.4 1242.7,513.4 1251.1,511.2 1240,486.8 1237.2,486.8 ",
            dimensions: "Flat 3 / 35.6",
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
                    <div className=" block">B block</div>
                    <div className="flex centered">
                        <Link
                            href={route("client.floorA4.index")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">Floor 2</div>
                        <Link href={route("client.floorB3.index")}>
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
                        viewBox="0 0 1750 600"
                        style={{ enableBackground: "new 0 0 1750 600" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="1710"
                            height="568"
                            xlinkHref="/img/floorplan/B2.png"
                            transform="matrix(1 0 0 1 20 16)"
                        ></image>
                        {flatList.map((flat, index) => {
                            return (
                                <Tippy
                                    maxWidth="0"
                                    arrow={false}
                                    content={
                                        <button
                                            style={{
                                                transform:
                                                    "var(--tooltip-position2)",
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
                                            {flat.dimensions} <sup>2</sup>
                                        </button>
                                    }
                                >
                                    <Link
                                        href={flat.link}
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
