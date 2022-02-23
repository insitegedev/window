import React, { useEffect } from "react";
import Showcase from "../../components/Showcase/Showcase";
import "./AboutUs.css";
import { ArrowButton, MainButton } from "../../components/Buttons/Buttons";
import Facilities from "../Home/Facilities/Facilities";
import Layout from "../../Layouts/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import { usePage, Head } from "@inertiajs/inertia-react";


const AboutUs = ({ page }) => {
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
    return (
        <Layout>
            <Head>
                <title>{page.meta_title}</title>
                <meta name="description" content={page.meta_description} />
            </Head>
            <div className="aboutPage">
                <ArrowButton
                    link={route("client.choosefloor.index")}
                    color="#334E60"
                    text={__("choose_apartment")}
                />
                <Showcase title={__("about_us")} />
                <div className="wrapper flex one">
                    <div className="content" data-aos="fade-right">
                        <div className="playfair">{page.title}</div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: page.description,
                            }}
                        ></p>
                        <div className="playfair">{page.title_2}</div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: page.description_2,
                            }}
                        ></p>
                        <div className="map" data-aos="fade-up">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11909.044506590086!2d44.7621418!3d41.7364602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1643612359314!5m2!1sen!2sge"
                                style={{ border: "none" }}
                                allowFullScreen=""
                                loading="lazy"
                                width="100%"
                                height="100%"
                            ></iframe>
                        </div>
                    </div>
                    <div className="images">
                        <div className="img">
                            <img
                                src="/img/about/4.png"
                                alt=""
                                data-aos="fade-left"
                            />
                        </div>
                        <div className="img b">
                            <img
                                src="/img/about/5.png"
                                alt=""
                                data-aos="fade-left"
                            />
                        </div>
                    </div>
                </div>
                <div className="services" data-aos="fade-up">
                    <div className="wrapper flex">
                        <div>
                            <div className="playfair">
                                {__(
                                    "services_you_have_when_living_in_window_bakuriani"
                                )}
                            </div>
                            <p>
                                {__(
                                    "services_you_have_when_living_in_window_bakuriani_description"
                                )}
                            </p>
                            <MainButton link="/" text={__("learn_more")} />
                        </div>
                        <Facilities />
                    </div>
                </div>
                <div className="bottom">
                    <div className="wrapper">
                        <div
                            className="flex  top"
                            style={{ justifyContent: "flex-start" }}
                            data-aos="fade-down-right"
                        >
                            <div className="img">
                                <img src="/img/about/2.png" alt="" />
                            </div>
                            <p>{__("services_little_description_1")}</p>
                        </div>
                        <div
                            className="flex  end"
                            style={{ justifyContent: "flex-end" }}
                            data-aos="fade-up-left"
                        >
                            <p>{__("services_little_description_2")}
                            </p>
                            <div className="img">
                                <img src="/img/about/3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;
