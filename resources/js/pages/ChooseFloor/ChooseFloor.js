import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { BackButton } from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";
import Layout from "../../Layouts/Layout";
import "./ChooseFloor.css";

const ChooseFloor = ({apartments, urlPrev}) => {
    const [floorIndex, setFloorIndex] = useState(0);
    const floorList = [
        {
            key: 1,
            link: "/",
            points: "319.4,533.4 517.1,513.2 492,511.2 914.9,467.9 934.7,469.2 938.9,467.9 944,469 1095.1,480 1069,390 919.1,375.5 913.2,375.5 909.6,377.3 582.8,428.9",
            floorName: "A4",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 2,
            link: "/",
            points: "319.4,533.4 517.1,513.2 492,511.2 914.9,467.9 934.7,469.2 938.9,467.9 944,469 1095.1,480 1118.4,557.4 968.2,557.4 962.7,555.4 958.9,558.6 936.2,558.6 913.8,558.6 306,592.1 306,586.8 319.4,586.3",
            floorName: "A3",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 3,
            link: "/",
            points: "306,654 940.4,647.8 963,646 982.5,646 986.7,644 992,645.4 1145.2,645.4 1118.4,557.4 968.2,557.4 962.7,555.4 958.9,558.6 913.8,558.6 317.8,592.1 317.8,648.1 306,648.1",
            floorName: "A2",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 4,
            link: "/",
            points: "317.6,725.4 317.6,654 940.4,647.8 963,646 982.5,646 986.7,644 992,645.4 1145.2,645.4 1149.6,659.7 1011,725.4 925.9,742.9 811.6,742.9",
            floorName: "A1",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 5,
            link: "/",
            points: "1118.7,288.3 1222.7,267.7 1226.9,262.8 1234.2,262.8 1506.9,327.7 1530.7,389.2 1530.7,400.3 1258.9,342.1 1252.4,341.7 1246.7,347.7 1228,343.9 1141.6,356.1 1156.2,359.7 1141.3,360.6 ",
            floorName: "B4",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 6,
            link: "/",
            points: "1166,441 1141.3,360.6 1156.2,359.7 1141.6,356.1 1228,343.9 1246.7,347.7 1252.4,341.7 1258.9,342.1 1530.7,400.3 1530.7,467.2 1288.1,431.7 1280.3,428.1 1273.5,431.1 1255.1,428.6 1170.9,435.7 1187.3,439",
            floorName: "B3",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 7,
            link: "/",
            points: "1190.1,522 1166,441 1187.3,439 1170.9,435.7 1255.1,428.6 1273.5,431.1 1280.3,428.1 1288.1,431.7 1530.7,467.2 1542.8,468.9 1542.8,537.3 1419.6,524 1418.4,520.1 1315.9,516.9 1307.6,513.3 1302.5,514.5 1282.1,513 1192,518.6  1207.7,521.3",
            floorName: "B2",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
        {
            key: 8,
            link: "/",
            points: "1216,619.2 1190.1,522 1207.7,521.3 1192,518.6 1282.1,513 1302.5,514.5 1307.6,513.3 1315.9,516.9 1418.4,520.1 1419.6,524 1542.8,537.3 1569.8,540.1 1569.8,616.1 1354.4,606.8 ",
            floorName: "B1",
            para1: "სართული 4",
            para2: "დარჩენილია 5 ბინა",
        },
    ];
    floorList.map((floor, key)=>{
        return apartments.map((apartment) =>{
            if (apartment.title === floor.floorName){
                floor.para1 = apartment.floor;
                floor.para2 = apartment.apartments;
                return floor;
            }
        })

    })
    return (
        <Layout>
            <div className="chooseFloor">
                <Showcase short />
                <BackButton color="#1B2D39" link={urlPrev}/>
                <div className="container">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1903 960"
                        style={{ enableBackground: "new 0 0 1903 960" }}
                    >
                        <image
                            style={{ overflow: "visible" }}
                            width="1903"
                            height="960"
                            xlinkHref="/img/apartments/building.png"
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
                            <h1>A BLOCK</h1>
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
                            <h1>B BLOCK</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChooseFloor;
