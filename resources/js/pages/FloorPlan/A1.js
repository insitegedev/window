import { Link, Head, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { ArrowRight } from "/img/icons/sm/smIcons";
import { BackButton } from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";
import Layout from "../../Layouts/Layout";
import Background from "/img/apartments/bg.png";
import "./FloorPlan.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";

const ChooseFloor = ({ seo, urlPrev, apartments }) => {
    const sharedData = usePage().props.localizations;

    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }

    // const flatList = [
    //     {
    //         link: "/",
    //         points: "91.3,350.9 11.6,350.9 11.6,4 179,4 179,33.6 174.2,33.6 160.6,67.1 171.9,71.6 179,71.6 179,77.2 164.4,77.2 164.4,350.9 142.5,350.9 142.5,346.5 91.6,346.5",
    //         dimensions: "Flat 1 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "189.3,350.9 164.4,350.9 164.4,77.2 179,77.2 179,71.6 190.3,71.6 190.3,78.2 218.5,94.3 222.4,80.9 222.4,71.6 308.2,71.6 308.2,350.9 284.4,350.9 284.2,347.3 189.1,347.3",
    //         dimensions: "Flat 2 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "308.2,350.9 308.2,71.6 394.7,71.6 394.7,81.3 398.9,94.3 427.3,78 427.3,71.6 450.2,71.6 450.2,350.9 428,350.9 428,346.7 331.4,346.7 331.4,350.9 ",
    //         dimensions: "Flat 3 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "450.2,350.9 450.2,71.6 474.6,71.6 474.6,78.3 502.7,94.3 506.3,81 506.3,71.6 593.8,71.6 593.8,350.9 570.4,350.9 570.4,346.9 474.5,346.9 474.5,351 ",
    //         dimensions: "Flat 4 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "593.8,350.9 593.8,71.6 680.3,71.6 680.3,81.3 684.4,94.3 712.9,78 712.9,71.6 735.8,71.6 735.8,350.9 713.6,350.9 713.6,346.7 617,346.7 617,350.9 ",
    //         dimensions: "Flat 5 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "735.3,350.9 735.3,71.6 759.7,71.6 759.7,78.3 787.8,94.3 791.4,81 791.4,71.6 878.9,71.6 878.9,350.9 855.5,350.9 855.5,346.9 759.6,346.9 759.6,351 ",
    //         dimensions: "Flat 6 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "878.9,350.9 878.9,71.6 965.4,71.6 965.4,81.3 969.6,94.3 998,78 998,71.6 1020.9,71.6 1020.9,350.9 998.7,350.9 998.7,346.7 902.1,346.7 902.1,350.9 ",
    //         dimensions: "Flat 7 / 35.6",
    //     },
    //     {
    //         link: "/",
    //         points: "1020.9,350.9 1020.9,71.6 1045.2,71.6 1045.2,78.3 1073.3,94.3 1077,81 1077,71.6 1164.4,71.6 1164.4,350.9 1141,350.9 1141,346.9 1045.2,346.9 1045.2,351",
    //         dimensions: "Flat 8 / 35.6",
    //     },
    //
    //     {
    //         link: "/",
    //         points: "1164.4,350.9 1164.4,71.6 1251,71.6 1251,81.3 1255.1,94.3 1283.6,78 1283.6,71.6 1306.4,71.6 1306.4,350.9 1284.2,350.9 1284.2,346.7 1187.7,346.7 1187.7,350.9 ",
    //         dimensions: "Flat 9 / 35.6",
    //     },
    // ];
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
                        <div className="left disabled">
                            <ArrowRight color="#334E60" />
                        </div>
                        <div className="bold">{apartments.floor}</div>
                        <Link href={route("client.showFloor.index", "A2")}>
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
                        viewBox="0 0 1582 486"
                        style={{ enableBackground: "new 0 0 1582 486" }}
                        xmlSpace="preserve"
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="1567"
                            height="486"
                            xlinkHref="/img/floorplan/A1.png"
                            transform="matrix(1 0 0 1 7.5 0)"
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
                                            {flat.dimension}
                                            <sup>
                                                2
                                            </sup>
                                            <br/>
                                            {flat.status === 0 ? __("sold") : ""}
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
