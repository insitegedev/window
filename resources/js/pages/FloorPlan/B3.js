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
            points: "60.5,102.7 60.5,810.3 226.4,810.3 226.4,711.3 1288.3,711.3 1288.3,692.1 1303,636.6 1435.1,698.9 1435.1,711.3 1531,711.3 1531,39.9 212.3,39.9 212.3,102.7 ",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "60.5,810.3 226.4,810.3 226.4,711.3 1288.3,711.3 1288.3,1127.5 1269.7,1127.5 1210.2,1254.4 1258.1,1270.4 1288,1270.4 1288,1351.3 237.1,1351.3 237.1,1362.9 60.2,1362.9 ",
            dimension: "Flat 2 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "60.2,1362.9 237.1,1362.9 237.1,1351.3 1288,1351.3 1288,1428.7 1263,1428.7 1203,1554.1 1256.5,1569.4 1288,1569.4 1288,1976.5 237.2,1976.5 237.2,1998 59.9,1998 ",
            dimension: "Flat 3 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "59.9,1998 237.2,1998 237.2,1976.5 1288,1976.5 1288,2386.3 1258.7,2386.3 1206.6,2402.3  1263.7,2529.7 1290.7,2529.7 1290.7,2587.8 208.6,2587.8 208.6,2553.6 59.4,2553.6 ",
            dimension: "Flat 4 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "1531,39.9 2411.1,39.9 2411.1,151.8 2566.6,151.8 2566.6,1351.6 2408,1351.6 1519.4,1351.6 1519.4,872.9 1551.2,872.9 1598.8,856.7 1544.3,722.9 1531.3,722.9 1531.3,711.3 ",
            dimension: "Flat 5 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "2408,1351.6 1519.4,1351.6 1519.4,1865.1 1546.1,1865.1 1601.8,1983.9 1553.5,1998.1 1523.3,1998.1 1523.3,2587.8 1869.7,2587.8 1869.7,2741.9 2386.7,2741.9 2386.7,2587.8 2562.2,2587.8 2562.2,1387.8 2407.7,1387.8  ",
            dimension: "Flat 6 / 35.6",
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
                            href={route("client.showFloor.index", "B2")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link
                            href={route("client.showFloor.index", "B4")}
                            className="right"
                        >
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
                        viewBox="0 0 3332 2787"
                        style={{ enableBackground: "new 0 0 3332 2787" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="3332"
                            height="2787"
                            xlinkHref="/img/floorplan/B3.png"
                            transform="matrix(0.9702 0 0 0.9702 59.2222 38.989)"
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
