import React, { useEffect } from "react";
import { BackButton } from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";

import "../../pages/Services/Services";
import "./SingleService.css";
import { PagePath } from "../../components/PagePath/PagePath";
import DragSlide from "./DragSlide/DragSlide";
import { NextServiceBox } from "../../components/NextServiceBox/NextServiceBox";
import Layout from "../../Layouts/Layout";
import { Head, usePage } from "@inertiajs/inertia-react";

import Aos from "aos";
import "aos/dist/aos.css";

const SingleService = ({ service, nextService, urlPrev, seo }) => {
    const sharedData = usePage().props.localizations;

    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }
    const sliderImages = [
        "/img/services/1.png",
        "/img/services/2.png",
        "/img/services/3.png",
        "/img/services/4.png",
        "/img/services/1.png",
        "/img/services/2.png",
        "/img/services/3.png",
        "/img/services/4.png",
    ];
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Layout seo={seo}>
            <div className="singleService servicePage">
                <Showcase short />
                <BackButton
                    color="#334E60"
                    link={urlPrev}
                    text={__("go_back")}
                />
                <PagePath
                    loc1="home"
                    loc2="Services"
                    loc3="Spa & Aesthetics Center"
                />
                <div className="wrapper">
                    <div className="flex main one">
                        <div className="img" data-aos="fade-right">
                            {service.main_file_1 && (
                                <img
                                    src={
                                        "/" +
                                        service.main_file_1.path +
                                        "/" +
                                        service.main_file_1.title
                                    }
                                    alt=""
                                />
                            )}
                        </div>
                        <div className="content">
                            <img
                                className="icon"
                                src="/img/icons/home/spa.svg"
                                alt=""
                            />
                            <div className="playfair">{service.title}</div>
                            <div className="subtitle">{service.subtitle_1}</div>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: service.content_1,
                                }}
                            ></p>
                        </div>
                    </div>
                    <div className="flex main two">
                        <div className="content">
                            <div className="subtitle">{service.subtitle_2}</div>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: service.content_2,
                                }}
                            ></p>
                        </div>
                        <div className="img" data-aos="fade-left">
                            {service.main_file_2 && (
                                <img
                                    src={
                                        "/" +
                                        service.main_file_2.path +
                                        "/" +
                                        service.main_file_2.title
                                    }
                                    alt=""
                                />
                            )}
                        </div>
                    </div>
                </div>
                <DragSlide sliderData={service.files} />
                <NextServiceBox
                    link={route("client.service.show", nextService.id)}
                    background={
                        nextService.main_file_1
                            ? "/" +
                              nextService.main_file_1.path +
                              "/" +
                              nextService.main_file_1.title
                            : "/img/services/2.png"
                    }
                    title={nextService.title}
                    icon="/img/icons/home/pool.svg"
                />
            </div>
        </Layout>
    );
};

export default SingleService;
