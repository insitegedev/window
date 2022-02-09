import React, { useEffect } from "react";
import Showcase from "../../components/Showcase/Showcase";

import Form from "../../components/Form/Form";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "./Contact.css";
import { ArrowButton } from "../../components/Buttons/Buttons";
import Layout from "../../Layouts/Layout";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Layout>
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
                <ArrowButton color="#334E60" link="/" />
            </div>
        </Layout>
    );
};

export default Contact;
