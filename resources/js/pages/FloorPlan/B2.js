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
            points: "39.5,9.6 303.9,9.6 303.9,228.6 300,228.6 290,232.3 302,255.8 305.5,255.8 305.5,274.3 42.9,274.3  42.9,278.6 7.6,278.6 7.6,149.3 40.2,149.3 ",
            dimensions: "Flat 1 / 35.6",
        },
        {
            link: "/",
            points: "7.6,278.6 42.9,278.6 42.9,274.3 305.5,274.3 305.5,293.9 301.7,293.9 288.8,316.8 303.7,320.6  305.5,320.6 305.5,400.8 42.6,400.8 42.6,404.1 7.6,404.1 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "7.6,404.1 42.6,404.1 42.6,400.8 305.5,400.8 305.5,476.2 300.5,476.2 289.4,479.1 302.6,504.5  305.5,504.5 305.5,530.6 38.7,530.6 38.7,519.4 7.6,519.4  ",
            dimensions: "Flat 3 / 35.6",
        },
        {
            link: "/",
            points: "303.9,9.6 567,9.6 567,274.3 353.7,274.3 353.7,210.6 346.3,210.6 346.3,204.4 343.6,192.6  320.5,204.1 320.5,210 303.9,210",
            dimensions: "Flat 4 / 35.6",
        },
        {
            link: "/",
            points: "353.7,274.3 567,274.3 567,540.4 537.1,540.4 537.1,565.3 419.1,565.3 419.1,527.1 353.7,527.1  353.7,405.9 362.6,405.9 369.4,399 358.4,378.6 353.7,378.6 ",
            dimensions: "Flat 5 / 35.6",
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
                            href={route("client.showFloor.index", "B1")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route("client.showFloor.index", "B3")}>
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
                        viewBox="0 0 700 600"
                        style={{ enableBackground: "new 0 0 700 600" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="693"
                            height="589"
                            xlinkHref="/img/floorplan/B3.png"
                            transform="matrix(1 0 0 1 3.5 5.5)"
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
