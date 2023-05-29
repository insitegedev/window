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
            points: "491.7,37.7 491.7,297.9 432.6,297.9 432.6,538.3 495,538.3 495,531 974.2,531 974.2,496.5 968.1,496.5 946.1,451 960.9,445.6 969.5,445.6 969.5,37.3 ",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "969.5,37.3 969.5,411 998.6,411 998.6,403.3 1046,377.8 1049.9,399.4 1049.9,410.4 1061.8,410.4 1061.8,530.8 1450,530.8 1450,37.4 ",
            dimension: "Flat 2 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "974.2,531 495,531 495,538.3 432.6,538.3 432.6,772.9 495,772.9 495,768.1 976,768.1 976,616 969.4,616 943.2,610.7 967.8,566.6 974.2,566.6 ",
            dimension: "Flat 3 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "976,768.1 495,768.1 495,772.9 432.6,772.9 432.6,987.5 489.4,987.5 489.4,1018.8 974.8,1018.8 974.8,958.6 968.1,958.6 944.7,911.7 960.1,906.5 976,906.5 ",
            dimension: "Flat 4 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "1061.8,530.8 1450,530.8 1450,999.8 1371.8,999.8 1371.8,1057.5 1177.1,1057.5 1177,1000.2 1062.3,1000.2 1062.3,777.9 1071.4,777.9 1093.9,772.8 1070,725.4 1061.7,725.4 ",
            dimension: "Flat 5 / 35.6",
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
                        viewBox="0 0 1920 1080"
                        style={{ enableBackground: "new 0 0 1920 1080" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="3356"
                            height="2793"
                            xlinkHref="/img/floorplan/B2.png"
                            transform="matrix(0.3655 0 0 0.3655 432.5 37.0297)"
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
