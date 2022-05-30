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
            points: "11.9,2.2 11.9,1462.5 342.8,1462.5 342.8,1453.6 413.9,1453.6 413.9,1431.5 849.9,1431.5 849.9,1453.8 947.9,1453.8 947.9,1611.6 1598.2,1611.6 1598.2,290.2 1521.9,274.2 1598.4,142.1 1598.4,7.6 1449.9,7.6 1449.9,32.5 1131.4,32.5 1131.4,8.5 816.9,8.5 816.9,32.4 480.9,32.4 480.9,8.8 366.9,8.8 366.9,2.5",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "1598.2,290.2 1598.2,1611.6 2243.9,1611.6 2243.9,290.5 1852.9,290.5 1838.8,384.1 1709.6,309.8 1709.6,290.8 ",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "2243.9,290.5 2243.9,1611.6 2891.1,1611.6 2891.1,290.5 2791.9,290.5 2791.9,310.1 2663.1,383.1 2649.6,331.1 2649.6,290.2 ",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "2891.1,290.5 2891.1,1611.6 3539.3,1611.6 3539.3,290.7 3146.1,290.5 3145.9,329.6 3131.8,383.7 3004.9,311.1 3004.9,290.5 ",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "3539.3,290.7 3539.3,1611.6 4186,1611.6 4186,1426.2 4203.5,1426.2 4203.5,290.7 4080.4,290.5 4080.4,314.8 3960.3,383.4 3946.1,331.6 3946.1,291.1",
            dimension: "Flat 1 / 35.6",
        },
        {
            slug: "1",
            status: 1,
            points: "4223.5,444.2 4203.5,444.2 4203.5,1426.2 4186,1426.2 4186,1611.6 4831,1611.6 4831,1453.2  4917.1,1453.2 4988,1453.2 4988,442.2 4435,442.2 4435,476.5 4422,527.6 4302.6,466.4 4302.6,444.5 ",
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
                            href={route("client.showFloor.index", "A3")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route("client.showFloor.index", "A5")}>
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
                        viewBox=" 0 0 5139 1672"
                        style={{ enableBackground: "new new 0 0 5139 1672" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="5139"
                            height="1672"
                            xlinkHref="/img/floorplan/A4.png"
                            transform="matrix(1 0 0 1 5.9166 -3.5695)"
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
