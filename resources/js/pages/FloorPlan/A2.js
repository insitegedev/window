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
            link: "/",
            points: "81.1,371.8 110.4,371.8 110.4,409.3 230.9,409.3 230.9,364.9 244.4,364.9 244.4,96.7 218.7,96.7 218.7,104.2 218.7,108.5 190.5,122.7 185.3,109.9 185.3,96.7 97.5,96.7 97.5,87.6 81.1,87.6 81.1,221.1 75.8,221.1 75.8,227.8 84.7,227.8 84.7,296.9 75.8,296.9 75.8,304 81.4,304 ",
            dimensions: "Flat 1 / 35.6",
        },

        {
            link: "/",
            points: "230.9,409.3 230.9,364.9 244.4,364.9 244.4,99.8 270.4,99.8 270.4,104.8 298.2,120.5 302.7,108.1  302.7,99.8 394.4,99.8 394.4,409.3 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "394.4,99.8 487,99.8 487,108.4 490.2,120.8 520.7,105.4 520.7,99.8 545,99.8 545,409.3 394.4,409.3 ",
            dimensions: "Flat 3 / 35.6",
        },
        {
            link: "/",
            points: "545,99.8 571.6,99.8 571.6,105.6 600,121.3 604.7,108.4 604.7,99.8 696.2,99.8 696.2,409.3 545,409.3 ",
            dimensions: "Flat 4 / 35.6",
        },
        {
            link: "/",
            points: "696.2,99.8 788.8,99.8 788.8,108.4 792,120.8 822.5,105.4 822.5,99.8 846.8,99.8 846.8,409.3  696.2,409.3  ",
            dimensions: "Flat 5 / 35.6",
        },
        {
            link: "/",
            points: "846.8,99.8 873.4,99.8 873.4,105.6 901.8,121.3 906.5,108.4 906.5,99.8 998,99.8 998,409.3 846.8,409.3 ",
            dimensions: "Flat 6 / 35.6",
        },
        {
            link: "/",
            points: "998,99.8 1090.6,99.8 1090.6,108.4 1093.8,120.8 1124.4,105.4 1124.4,99.8 1148.6,99.8 1148.6,409.3 998,409.3 ",
            dimensions: "Flat 7 / 35.6",
        },
        {
            link: "/",
            points: "1148.6,99.8 1175.2,99.8 1175.2,105.6 1203.6,121.3 1208.3,108.4 1208.3,99.8 1299.8,99.8  1299.8,409.3 1148.6,409.3 ",
            dimensions: "Flat 8 / 35.6",
        },
        {
            link: "/",
            points: "1299.8,99.8 1392.4,99.8 1392.4,108.4 1395.6,120.8 1426.2,105.4 1426.2,99.8 1456,99.8 1456,369.1 1451.5,369.1 1451.5,409.3 1299.8,409.3 ",
            dimensions: "Flat 9 / 35.6",
        },

        {
            link: "/",
            points: "1451.5,409.3 1451.5,369.1 1456,369.1 1456,135.3 1478.7,135.3 1478.7,140.7 1506.4,155.1 1510.7,147.6 1510.7,135.3 1714.7,135.3 1714.7,370.9 1639.6,370.9 1639.6,409.3",
            dimensions: "Flat 10 / 35.6",
        },
    ];
    const [flatIndex, setFlatIndex] = useState(0);

    return (
        <Layout seo={seo}>
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
                            href={route("client.showFloor.index", "A1")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route("client.showFloor.index", "A3")}>
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
                            width="1709"
                            height="397"
                            xlinkHref="/img/floorplan/A2.png"
                            transform="matrix(1 0 0 1 20.5 26.5)"
                        ></image>
                        {apartments.floors.map((flat, index) => {
                            const sold = flat.status === 0;
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
