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

const ChooseFloor = ({ page, urlPrev, apartments }) => {
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
            points: "27.4,362 27.4,298.6 21.5,298.6 21.5,292.7 31,292.7 31,155.5 21.5,155.5 21.5,149 27.9,149 27.9,23 203.4,23 203.4,61.3 196.6,61.3 181.8,85.3 203.4,89.1 203.4,97.1 196.6,97.1 196.6,354.4 181.8,354.4 181.8,399.3 57.8,399.3 58,362.4  ",
            dimensions: "Flat 1 / 35.6",
        },

        {
            link: "/",
            points: "181.8,399.3 181.8,354.4 196.6,354.4 196.6,97.1 203.4,97.1 203.4,89.1 222,89.1 222,95.7 224.9,95.7 252.4,111 256.9,98.1 256.9,89.1 350.7,89.1 350.7,399.3 ",
            dimensions: "Flat 2 / 35.6",
        },
        {
            link: "/",
            points: "350.7,399.3 350.7,89.1 446.7,89.1 446.7,99.8 450.2,110.4 480.9,96.2 480.9,89.1 507.1,89.1 507.1,399.3 ",
            dimensions: "Flat 3 / 35.6",
        },
        {
            link: "/",
            points: "662.7,399.3 662.7,89.1 758.7,89.1 758.7,99.8 762.2,110.4 792.9,96.2 792.9,89.1 819.1,89.1 819.1,399.3 ",
            dimensions: "Flat 4 / 35.6",
        },
        {
            link: "/",
            points: "974.7,399.3 974.7,89.1 1070.7,89.1 1070.7,99.8 1074.2,110.4 1104.9,96.2 1104.9,89.1 1131.1,89.1 1131.1,399.3 ",
            dimensions: "Flat 5 / 35.6",
        },
        {
            link: "/",
            points: "1286.7,399.3 1286.7,89.1 1382.7,89.1 1382.7,99.8 1386.2,110.4 1416.9,96.2 1416.9,89.1 1443.1,89.1 1443.1,399.3 ",
            dimensions: "Flat 6 / 35.6",
        },
        {
            link: "/",
            points: "507.1,89.1 534.2,89.1 534.2,95.8 563.1,110.4 568.4,99.8 568.4,89.1 662.7,89.1 662.7,399.3 507.1,399.3 ",
            dimensions: "Flat 7 / 35.6",
        },
        {
            link: "/",
            points: "819.1,89.1 846.2,89.1 846.2,95.8 875.1,110.4 880.4,99.8 880.4,89.1 974.7,89.1 974.7,399.3 819.1,399.3 ",
            dimensions: "Flat 8 / 35.6",
        },
        {
            link: "/",
            points: "1131.1,89.1 1158.2,89.1 1158.2,95.8 1187.1,110.4 1192.4,99.8 1192.4,89.1 1286.7,89.1 1286.7,399.3 1131.1,399.3  ",
            dimensions: "Flat 9 / 35.6",
        },

        {
            link: "/",
            points: "1443.1,399.3 1443.1,125.9 1472.1,125.9 1472.1,131.2 1501.2,144.8 1506.5,132.4 1506.5,125.9 1679,125.9 1679,362.3 1638.7,362.3 1638.7,399.3 ",
            dimensions: "Flat 10 / 35.6",
        },
    ];
    const [flatIndex, setFlatIndex] = useState(0);

    return (
        <Layout>
            <Head>
                <title>{page.meta_title}</title>
                <meta name="description" content={page.meta_description} />
            </Head>
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
                            href={route("client.showFloor.index", "A2")}
                            className="left"
                        >
                            <ArrowRight color="#334E60" />
                        </Link>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route("client.showFloor.index", "A4")}>
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
                            width="1716"
                            height="408"
                            xlinkHref="/img/floorplan/A3.png"
                            transform="matrix(1 0 0 1 17 18)"
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
