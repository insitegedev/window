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

const ChooseFloor = ({ seo, urlPrev, apartments }) => {
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
            slug: "1",
            status: 1,
            points: "506,343.1 506,761.5 538.8,761.5 589.9,775.1 528.9,890 505.1,890 505.1,928.8 2231.2,928.8 2231.2,851.6 2268.3,851.6 2268.3,418.4 2231,418.4 2231,352.1 2064.1,352.1 2064.1,289.2 2061.7,289.2 2061.7,144.3 1574.9,144.3 1574.9,289 504.1,289 ",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "505.1,928.8 2231.2,928.8 2231.2,1022.9 2269.1,1022.9 2269.1,1455.7 2230.6,1455.7 2230.6,1532.3 505.2,1532.3 505.2,1455.5 525,1455.5 588.1,1344.8 537.7,1331.9 504.9,1331.9 ",
            dimension: "Flat 2 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "505.2,1532.3 2230.6,1532.3 2230.6,1612.8 2269.1,1612.8 2269.1,2033.4 2230.6,2033.4 2230.6,2118.8 505.4,2118.8 505.4,1749.4 538.1,1749.4 538.1,1751.7 587.7,1739.3 525.2,1628.6 505.2,1628.6 ",
            dimension: "Flat 3 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "505.4,2118.8 2230.6,2118.8 2230.6,2774 2098.5,2774 2098.5,2925.6 1562,2925.6 1562,2775 1488.2,2775 1488.2,2715.7 1484.4,2715.7 1484.4,2716.5 1456.9,2716.5 1456.9,2715.7 1373.1,2715.7 1373.1,3122.6 1052.1,3122.6 1004.6,2900 677.4,2900 677.4,2710.6 505.3,2710.6 505.3,2592.7 525.2,2592.7 587.8,2482.6 532.6,2470 505.7,2470",
            dimension: "Flat 4 / 35.6",
        },
    ];
    const [flatIndex, setFlatIndex] = useState(0);

    return (
        <Layout seo={seo}>
            <div className="floorPlan smaller">
                <img className="background" src={Background} alt="" />
                <Showcase short />
                <BackButton
                    color="#1B2D39"
                    link={urlPrev}
                    text={__("go_back")}
                />
                <div className="head">
                    <div className=" block">{__("b_block")}</div>
                    <div className="flex centered">
                        <Link
                            href={route("client.showFloor.index", "B4")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <div className="disabled">
                            <ArrowRight color="#334E60" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 3200 3300"
                        style={{ enableBackground: "new 0 0 3200 3300" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="3195"
                            height="3266"
                            xlinkHref="/img/floorplan/B4.png"
                            transform="matrix(0.9126 0 0 0.9126 146.5556 143.8889)"
                        ></image>
                        {flatList.map((flat, index) => {
                            const sold = flat.status === 0;
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
                                                display: sold
                                                    ? "none"
                                                    : "block",
                                            }}
                                        >
                                            {sold ? __("sold") : flat.dimension}
                                            <sup>{sold ? "" : "2"}</sup>
                                        </button>
                                    }
                                >
                                    <Link
                                        onClick={
                                            sold
                                                ? (e) => e.preventDefault()
                                                : null
                                        }
                                        href={route(
                                            "client.apartment.index",
                                            flat.slug
                                        )}
                                        onMouseEnter={() =>
                                            setFlatIndex(index + 1)
                                        }
                                        onMouseLeave={() => setFlatIndex(0)}
                                    >
                                        <polygon
                                            key={index}
                                            className={
                                                sold ? "st0 sold" : "st0"
                                            }
                                            points={flat.points}
                                        />
                                    </Link>
                                </Tippy>
                            );
                        })}
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 750"
                        style={{ position: "absolute" }}
                    >
                        <defs>
                            <pattern
                                id="sold_image"
                                height="100%"
                                width="100%"
                                patternContentUnits="objectBoundingBox"
                                viewBox="-0.1 -0.15 1 1"
                                preserveAspectRatio="xMidYMid none"
                            >
                                <rect
                                    x="-100%"
                                    y="-100%"
                                    width="200%"
                                    height="200%"
                                    fill="rgba(226, 70, 70, 0.7)"
                                ></rect>
                                <image
                                    xlinkHref="https://archi.ge/images/sold_eng.png"
                                    height="1"
                                    width="1"
                                    preserveAspectRatio="xMidYMid none"
                                    transform="scale(0.8)"
                                ></image>
                            </pattern>
                        </defs>
                    </svg>
                </div>
            </div>
        </Layout>
    );
};

export default ChooseFloor;
