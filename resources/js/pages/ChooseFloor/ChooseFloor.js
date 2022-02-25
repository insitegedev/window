import { Link, Head, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { BackButton } from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";
import Layout from "../../Layouts/Layout";
import Background from "/img/apartments/bg.png";
import "./ChooseFloor.css";

const ChooseFloor = ({ apartments, page, urlPrev }) => {
    const sharedData = usePage().props.localizations;

    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }
    const [floorIndex, setFloorIndex] = useState(0);
    const floorList = [
        // {
        //     key: 1,
        //     link: "/",
        //     points: "576.9,511.11 886.28,465.78 900.01,457.79 909.59,462.26 917.25,457.79 1068.91,480.14 1045.29,398.73 894.27,370.95 885.96,377.65 887.56,387.23 ",
        //     floorName: "A5",
        //     para1: "სართული 5",
        //     para2: "დარჩენილია 5 ბინა",
        // },
        {
            key: 2,
            link: route('client.showFloor.index', "A4"),
            points: "576.9,511.11 886.28,465.78 900.01,457.79 909.59,462.26 917.25,457.79 1068.91,480.14 1089.35,548.15 939.92,539.05 933.7,548.15 912.14,545.76 493.2,589.82 509.85,591.25 322.11,611.37 ",
            floorName: "A4",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 3,
            link: route('client.showFloor.index', "A3"),
            points: "321.53,611.43 509.85,591.25 493.2,589.82 912.14,545.76 933.7,548.15 939.92,539.05 1089.35,548.15 1113.61,629.57 964.19,629.57 956.95,637.55 933.22,637.55 921.08,637.55 308.22,670.99 308.22,665.01 321.4,664.55",
            floorName: "A3",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 4,
            link: route('client.showFloor.index', "A2"),
            points: "320.19,670.34 921.08,637.55 933.22,637.55 956.95,637.55 964.19,629.57 1113.61,629.57 1138.2,723.44 988.77,723.44 982.55,727.75 981.11,722.48 960.04,724.39 937.53,725.83 308.22,732.06 308.22,726.31 322.11,725.35 ",
            floorName: "A2",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 5,
            link: route('client.showFloor.index', "A1"),
            points: "320.51,732.06 937.53,725.83 960.04,724.39 981.11,722.48 982.55,727.75 988.77,723.44 1138.2,723.44 1138.2,740.36 1008.25,802.62 938.33,802.62 906.4,802.62 897.46,802.62 897.78,809.01  811.25,809.01 322.11,794.32 ",
            floorName: "A1",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 6,
            link: route('client.showFloor.index', "B4"),
            points: "1043.74,342.87 1121.23,357.12 1244.6,326.94 1490.84,393.57 1492.77,466 1271.63,421.58 1266.32,420.13 1242.18,424.47 1224.32,420.13 1137.41,430.75 1155.75,435.74 1144.17,435.74 1070.26,432.32 ",
            floorName: "B4",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 7,
            link: route('client.showFloor.index', "B3"),
            points: "1070.26,432.32 1155.75,435.74 1137.41,430.75 1224.32,420.13 1242.18,424.47 1266.32,420.13 1492.77,466  1507.9,468.41 1507.9,531.18 1310.26,499.96 1299.64,499.96 1299.64,503.5 1292.56,503.5 1271.31,505.75 1251.35,502.53 1164.93,511.87 1180.38,515.25 1170.24,516.21 1092.98,516.21",
            floorName: "B3",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 8,
            link: route('client.showFloor.index', "B2"),
            points: "1092.98,516.21 1180.38,515.25 1164.93,511.87 1251.35,502.53 1271.31,505.75 1292.56,503.5 1299.64,503.5  1299.64,499.96 1310.26,499.96 1507.9,531.18 1538.64,537.46 1538.64,605.05 1565.68,607.47 1565.68,617.12 1329.33,591.53 1322.33,590.09 1295.29,592.02 1277.43,588.64 1186.17,594.43 1205.49,597.33 1187.62,601.07 1119.06,601.07",
            floorName: "B2",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 9,
            link: route('client.showFloor.index', "A1"),
            points: "1119.06,601.07 1187.62,601.07 1205.49,597.33 1186.17,594.43 1277.43,588.64 1295.29,592.02 1322.33,590.09 1565.68,617.12 1565.68,685.69 1268.25,679.41 1259.56,679.89 1142.72,685.69",
            floorName: "B1",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
    ];
    floorList.map((floor, key) => {
        return apartments.map((apartment) => {
            if (apartment.title === floor.floorName) {
                floor.para1 = apartment.floor;
                floor.para2 = apartment.apartments;
                return floor;
            }
        });
    });
    return (
        <Layout>
            <Head>
                <title>{page.meta_title}</title>
                <meta name="description" content={page.meta_description} />
            </Head>
            <div className="chooseFloor">
                <img className="background" src={Background} alt="" />
                <Showcase short />
                <BackButton
                    color="#1B2D39"
                    link={urlPrev}
                    text={__("go_back")}
                />
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
                            xlinkHref="/img/apartments/building.png"
                            width="1920"
                            height="1080"
                        ></image>
                        {floorList.map((floor) => {
                            return (
                                <Link
                                    href={floor.link}
                                    onMouseEnter={() =>
                                        setFloorIndex(floor.key)
                                    }
                                    onMouseLeave={() => setFloorIndex(0)}
                                    className={
                                        floorIndex === floor.key
                                            ? "hovered"
                                            : ""
                                    }
                                >
                                    <polygon
                                        className="st0"
                                        points={floor.points}
                                    />
                                </Link>
                            );
                        })}
                    </svg>
                    <div className="both_blocks">
                        <div className="blocks block_a">
                            {floorList.slice(0, 4).map((floor) => {
                                return (
                                    <Link
                                        onMouseEnter={() =>
                                            setFloorIndex(floor.key)
                                        }
                                        onMouseLeave={() => setFloorIndex(0)}
                                        href={floor.link}
                                        className={
                                            floorIndex === floor.key
                                                ? "line flex hovered"
                                                : "line flex"
                                        }
                                    >
                                        <div>
                                            <p>{floor.para1}</p>
                                            <p>{floor.para2}</p>
                                        </div>
                                        <h5>{floor.floorName}</h5>
                                    </Link>
                                );
                            })}
                            <h1>{__("a_block")}</h1>
                        </div>
                        <div className="blocks block_b">
                            {floorList.slice(-4).map((floor) => {
                                return (
                                    <Link
                                        onMouseEnter={() =>
                                            setFloorIndex(floor.key)
                                        }
                                        onMouseLeave={() => setFloorIndex(0)}
                                        href={floor.link}
                                        className={
                                            floorIndex === floor.key
                                                ? "line flex hovered"
                                                : "line flex"
                                        }
                                    >
                                        <h5>{floor.floorName}</h5>
                                        <div>
                                            <p>{floor.para1}</p>
                                            <p>{floor.para2}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                            <h1>{__("b_block")}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChooseFloor;
