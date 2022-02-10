import React, { useEffect } from "react";
import Showcase from "../../components/Showcase/Showcase";
import "./AboutUs.css";
import { ArrowButton, MainButton } from "../../components/Buttons/Buttons";
import Facilities from "../Home/Facilities/Facilities";
import Layout from "../../Layouts/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import {usePage} from "@inertiajs/inertia-react";

const AboutUs = () => {
    const sharedData = usePage().props.localizations;


    function __(key, replace = {}) {
        let translation = sharedData[key] || key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(':' + key, replace[key])
        });

        return translation;
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Layout>
            <div className="aboutPage">
                <ArrowButton  link="/" color="#334E60" />
                <Showcase title={__("about_us")} />
                <div className="wrapper flex one">
                    <div className="content" data-aos="fade-right">
                        <div className="playfair">About Project</div>
                        <p>
                            პრემიუმ კლასის სასტუმროს ტიპის კომპლექსი ბაკურიანში,
                            რაც წლის ყველა სეზონზე დასვენებას კიდევ უფრო
                            სასიამოვნოს, კომფორტულს და ჰარმონიულს გახდის.
                            <br />
                            <br />
                            კომპლექსის ინფრასტრუქტურა მოიცავს:
                            მიმღები/რეცეფშენი, სპა, პარკინგი, გამწვანებული ეზო
                            ბავშთა გასართობი მოედანით და ეზოს ინფრასტრუქტურით,
                            კაფე-რესტორანი, 24-საათიანი ვიდეომეთვალყურეობა,
                            დაცვა, გაქირავებისა და სასტუმროს სერვისები.
                            <br />
                            <br />
                            პროექტში აპარტამენტების შეძენა ხელსაყრელია როგორც
                            დასასვენებლად ასევე საინვესტიციოთ (გაქირავებიდან
                            შემოსავლის მიღების მიზნით)
                        </p>
                        <div className="playfair">About Location</div>
                        <p>
                            ბაკურიანი ისტორიულად ცნობილი სამთო რეკრეაციული
                            კურორტია. პროექტი მდებარეობს დიდველის საბაგიროსთან
                            ახლოს. მიმდებარედ აშენებული ცნობილი დეველოპერული
                            კომპანიების მიერ სხვადასხვა ტიპის სასტუმრო
                            ინფრასტრუქტურის კომპანიები. ერთი მხრიდან ტყის მასივი
                            ემიჯნება, წინა მხარეს კი აქვს გარანტირებული ხედები
                            მთებზე.
                        </p>
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
                    <img src="/img/about/1.png" alt="" data-aos="fade-left" />
                </div>
                <div className="services" data-aos="fade-up">
                    <div className="wrapper flex">
                        <div>
                            <div className="playfair">
                                Services You Have When Living In Window
                                Bakuriani
                            </div>
                            <p>
                                ბაკურიანი ისტორიულად ცნობილი სამთო რეკრეაციული
                                კურორტია. პროექტი მდებარეობს დიდველის
                                საბაგიროსთან ახლოს. მიმდებარედ აშენებული ცნობილი
                                დეველოპერული კომპანიების მიერ სხვადასხვა ტიპის
                                სასტუმრო ინფრასტრუქტურის კომპანიები. ერთი
                                მხრიდან ტყის მასივი ემიჯნება, წინა მხარეს კი
                                აქვს გარანტირებული ხედები მთებზე.
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
                            <p>
                                აპარტამენტების მფლობელების კომფორტისთვისა და
                                უკეთ დასვევნებისთვის კომპლექსი მოიცავს:
                                კაფე-რესტორანი, მისაღები/რეცეფშენი, პარკინგი,
                                ეზო მოსასვენებელი სივრცეებითა და ბავშთა
                                გასართობი მოედანით. ბინები ბარდება სრული
                                რემონტით/ავეჯით.
                            </p>
                        </div>
                        <div
                            className="flex  end"
                            style={{ justifyContent: "flex-end" }}
                            data-aos="fade-up-left"
                        >
                            <p>
                                პროექტი კარგად ერწყმის ბაკურიანის ადგილობრივ
                                ლანდშაფტს. დაპროექტებისას გათვალისწინებულია
                                ადგილობრივი კლიმატის თავისებურებები. ჯამში
                                დაგეგმარებულია 53 აპარტამენტი.
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
