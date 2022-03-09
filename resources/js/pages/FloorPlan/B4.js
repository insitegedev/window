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
            points: "166.9,120.4 166.9,50.7 425.6,50.7 425.6,60.4 453.6,60.4 453.6,71.6 460.2,71.6 460.2,143.1 453.6,143.1 453.6,155.4 166.9,155.4 166.9,142.7 171.2,142.7 177.3,130.9 166.9,122.1",
            dimensions: "Flat 1 / 35.6",
        },
        {
            link: "/",
            points: "166.9,155.4 453.6,155.4 453.6,171.4 460.2,171.4 460.2,243.1 454,243.1 454,255.4 166.9,255.4 166.9,242.9 171.1,243 180.8,224.4 171.9,222.9 166.9,222.9 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "166.9,255.4 454,255.4 454,269.1 460.2,269.1 460.2,339 453.9,339 453.9,353.4 166.9,353.4 166.9,292.3 173,292.3 181,289.6 170.1,272 167,272 ",
            dimensions: "Flat 3 / 35.6",
        },
        {
            link: "/",
            points: "166.9,353.4 453.9,353.4 453.9,461.2 431.9,461.2 431.9,487 342.9,487 343,462.1 331,462.1 331,451.8 312,451.8 312,522.4 254.7,522.4 254.7,460.9 192.1,460.9 192.1,455.9 164.4,455.9 164.4,451 167.3,451 167.3,431 171.5,431 181.3,413.6 173,411.1 167.1,411.1 ",
            dimensions: "Flat 4 / 35.6",
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
                            href={route("client.showFloor.index", "B3")}
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
                        viewBox="0 0 700 600"
                        style={{ enableBackground: "new 0 0 700 600" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="516"
                            height="533"
                            xlinkHref="/img/floorplan/B5.png"
                            transform="matrix(1 0 0 1 92 33)"
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
                                            }}
                                        >
                                            {sold ? "sold" : flat.dimension}
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
                </div>
            </div>
        </Layout>
    );
};

export default ChooseFloor;
