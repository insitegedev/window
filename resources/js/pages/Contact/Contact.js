import React, { useEffect } from "react";
import Showcase from "../../components/Showcase/Showcase";

import Form from "../../components/Form/Form";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Contact.css";
import { ArrowButton } from "../../components/Buttons/Buttons";
import Layout from "../../Layouts/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import {usePage, Head} from "@inertiajs/inertia-react";

const Contact = ({page}) => {
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
            <Head>
                <title>{page.meta_title}</title>
                <meta name="description" content={page.meta_description} />
            </Head>
            <div className="contactPage">
                <Showcase title="Contact Us" />
                <div className="body grid">
                    <img
                        className="img"
                        src="/img/contact/1.png"
                        alt=""
                        data-aos="fade-right"
                    />
                    <Form />
                    <ContactInfo color="#334E60" right />
                    <img
                        className="img"
                        src="/img/contact/2.png"
                        alt=""
                        data-aos="fade-left"
                    />
                </div>
                <ArrowButton color="#334E60" link={route('client.choosefloor.index')} text={__("choose_apartment")}/>
            </div>
        </Layout>
    );
};

export default Contact;
