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
            points: "23.6,40.9 54.4,40.9 54.4,28.4 317.2,28.4 317.2,159.2 298.1,159.2 298.1,154.1 271.7,140.6 267.4,153.9 267.4,157 56.5,157 56.5,176.4 23.6,176.4 ",
            dimensions: "Flat 1 / 35.6",
        },
        {
            link: "/",
            points: "23.6,176.4 56.5,176.4 56.5,157 267.4,157 267.4,236.6 264.8,236.6 253,261.2 261.7,264.6 267.4,264.6 267.4,280.1 57.2,280.1 57.2,282.8 23.6,282.8 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "23.6,282.8 57.2,282.8 57.2,280.1 267.4,280.1 267.4,294.8 262.8,294.8 251.2,318.3 262.3,322.3 267.4,322.3 267.4,400.1 57.2,400.1 57.2,404.3 23.6,404.3",
            dimensions: "Flat 3 / 35.6",
        },
        {
            link: "/",
            points: "23.6,404.3 57.2,404.3 57.2,400.1 267.4,400.1 267.4,478.3 262.3,478.3 251.4,482.1 263.2,506.6 267.4,506.6 267.4,516.6 53.7,516.6 53.7,511.2 23.6,511.2 ",
            dimensions: "Flat 4 / 35.6",
        },
        {
            link: "/",
            points: "317.2,28.4 522.1,28.4 522.1,271.2 491,271.2 491,280.1 315.4,280.1 315.4,189 317.2,189 330.6,184.8 319.6,159.7 317.2,159.7",
            dimensions: "Flat 5 / 35.6",
        },
        {
            link: "/",
            points: "315.4,280.1 491,280.1 491,301.6 521.4,301.6 521.4,532.5 493.4,532.5 493.4,561.4 386.6,561.4 386.6,532.4 372.4,532.4 372.3,517.7 315.4,517.7 315.4,404.3 318.7,404.3 330.3,401.7 320.5,378.9 315.4,378.9  ",
            dimensions: "Flat 6 / 35.6",
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
                        viewBox="0 0 700 600"
                        style={{ enableBackground: "new 0 0 700 600" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="661"
                            height="551"
                            xlinkHref="/img/floorplan/B4.png"
                            transform="matrix(1 0 0 1 19.5 24.5)"
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
