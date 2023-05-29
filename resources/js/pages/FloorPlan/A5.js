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
            points: "523.2,25.7 2.1,25.7 2.1,699.8 987.4,699.8 987.4,25.7 600.5,25.4 600.5,52.8 592.1,90 525.2,51.2 525.2,39.3 523.3,39.3",
            dimension: "Flat 1 / 35.6",
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
                            href={route("client.showFloor.index", "A4")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route("client.showFloor.index", "B1")}>
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
                        viewBox=" 0 0 990 700"
                        style={{
                            enableBackground: "new new 0 0 990 700",
                            maxWidth: "500px",
                        }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="100%"
                            height="100%"
                            xlinkHref="/img/floorplan/A5.png"
                            transform="matrix(1 0 0 1 5.9166 -3.5695)"
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
                                    xlinkHref="/images/sold_eng.png"
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
