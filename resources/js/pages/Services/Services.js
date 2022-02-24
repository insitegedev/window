import React, { useEffect } from "react";
import {
    ArrowButton,
    BackButton,
    MainButton,
} from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";
import { Link, usePage, Head } from "@inertiajs/inertia-react";

import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import Layout from "../../Layouts/Layout";

const Services = ({ services, page, urlPrev }) => {
    const sharedData = usePage().props.localizations;

    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const serviceBoxes = [
        {
            icon: "/img/icons/home/bell.svg",
            title: __("recipient_recreation"),
            para: __("recipient_recreation_description"),
        },
        {
            icon: "/img/icons/home/tree.svg",
            title: __("recreation_area_with_kids_playground"),
            para: __("recreation_area_with_kids_playground_description"),
        },
        {
            icon: "/img/icons/home/parking-area.svg",
            title: __("parking_area"),
            para: __("parking_area_description"),
        },
        {
            icon: "/img/icons/home/secure-shield.svg",
            title: __("security_service"),
            para: __("security_service_description"),
        },
        {
            icon: "/img/icons/home/cctv-camera.svg",
            title: __("video_monitoring"),
            para: __("video_monitoring_description"),
        },
        {
            icon: "/img/icons/home/key.svg",
            title: __("rental_and_hotel_services"),
            para: __("rental_and_hotel_services_description"),
        },
    ];

    return (
        <Layout>
            <Head>
                <title>{page.meta_title}</title>
                <meta name="description" content={page.meta_description} />
            </Head>
            <div className="servicePage">
                <Showcase title={page.title} />
                <BackButton color="#fff" link={urlPrev} text={__("go_back")} />
                <ArrowButton
                    color="#334E60"
                    link={route("client.choosefloor.index")}
                    text={__("choose_apartment")}
                />
                <div className="container">
                    <div
                        className="playfair"
                        dangerouslySetInnerHTML={{
                            __html: page.description,
                        }}
                    ></div>
                    <div className="flex first">
                        {services.length > 0 && (
                            <div
                                className="spabox flex centered"
                                data-aos="fade-up"
                            >
                                <div className="inner_box">
                                    <img
                                        src="/img/icons/home/spa.svg"
                                        alt=""
                                        className="icon"
                                    />
                                    <div className="playfair">
                                        {services[0].title}
                                    </div>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: services[0].description,
                                        }}
                                    ></p>
                                    <MainButton
                                        link={route(
                                            "client.service.show",
                                            services[0].id
                                        )}
                                        dark
                                        text={__("learn_more")}
                                    />
                                </div>
                            </div>
                        )}
                        {services.length > 1 && (
                            <div className="side_boxes">
                                {services.slice(1).map((service) => {
                                    return (
                                        <div
                                            className="sidebox sb1 flex"
                                            // style={{
                                            //     background: `url(${
                                            //         service.main_file_1
                                            //             ? "/" +
                                            //               service.main_file_1
                                            //                   .path +
                                            //               "/" +
                                            //               service.main_file_1
                                            //                   .title
                                            //             : "/img/services/2.png"
                                            //     })`,
                                            // }}
                                            data-aos="flip-right"
                                        >
                                            <div className="service_title">
                                                <img
                                                    src="/img/icons/home/pool.svg"
                                                    alt=""
                                                    className="icon"
                                                />
                                                <div>{service.title}</div>
                                            </div>
                                            <MainButton
                                                link={route(
                                                    "client.service.show",
                                                    service.id
                                                )}
                                                dark
                                                text={__("learn_more")}
                                            />
                                        </div>
                                    );
                                })}
                                {/*<div*/}
                                {/*    className="sidebox sb1 flex"*/}
                                {/*    data-aos="flip-right"*/}
                                {/*>*/}
                                {/*    <div className="service_title">*/}
                                {/*        <img*/}
                                {/*            src="/img/icons/home/coffee-cup.svg"*/}
                                {/*            alt=""*/}
                                {/*            className="icon"*/}
                                {/*        />*/}
                                {/*        <div>Café / Restaurant</div>*/}
                                {/*    </div>*/}
                                {/*    <MainButton*/}
                                {/*        link="/single-service"*/}
                                {/*        dark*/}
                                {/*        text="learn more"*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <div
                                    className="sidebox sb2"
                                    data-aos="flip-left"
                                >
                                    <p>{__("more_about_us_description")}</p>
                                    <MainButton
                                        link={route("client.about.index")}
                                        dark
                                        text={__("more_about_us")}
                                    />
                                </div>
                            </div>
                        )}{" "}
                    </div>
                    <div className="other_services">
                        <div className="head">
                            <h6>{page.title_2}</h6>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: page.description_2,
                                }}
                            ></p>
                        </div>
                        <div className="grid">
                            {serviceBoxes.map((box) => {
                                return (
                                    <div className="box" data-aos="flip-up">
                                        <div className="service_title">
                                            <img
                                                className="icon"
                                                src={box.icon}
                                                alt=""
                                            />
                                            <div>{box.title}</div>
                                        </div>
                                        <p>{box.para}</p>
                                        <img
                                            src={box.icon}
                                            alt=""
                                            className="bg"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
