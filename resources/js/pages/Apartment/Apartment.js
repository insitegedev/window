import React from "react";
import { BackButton } from "../../components/Buttons/Buttons";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import { PagePath } from "../../components/PagePath/PagePath";
import Showcase from "../../components/Showcase/Showcase";
import Layout from "../../Layouts/Layout";
import ApartmentImg from "/img/apartments/1.png";
import "./Apartment.css";
import { Link, Head } from "@inertiajs/inertia-react";
import Pdf from "/img/icons/apartment/file.svg";

const Apartment = ({ apartment }) => {
    const specifications = [
        "Hall - 6.3 m",
        "Bathroom - 4.4 m",
        "living room - 12.7 m",
        "Master bedroom - 14.8 m",
        "Bedroom - 8.5 m",
        "Balcony - 4.5 m",
    ];
    return (
        <Layout>
            <Head>
                <title>{apartment.meta_title}</title>
                <meta name="description" content={apartment.meta_description} />
                <meta name="keywords" content={apartment.meta_keyword} />
            </Head>
            <div className="apartmentPage">
                <Showcase short />
                <BackButton color="#334E60" />
                <PagePath
                    loc1="home"
                    loc2="Choose apartment"
                    loc3="apartments"
                />
                <div className="wrapper flex">
                    <div className="details">
                        <h1 className="floor">{apartment.title}</h1>
                        <h1 className="apartment">{apartment.apartment}</h1>
                        <div className="specifications">
                            <h6>Specifications</h6>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: apartment.specifications,
                                }}
                            ></p>
                            {/*<ol>*/}
                            {/*    {specifications.map((item, i) => {*/}
                            {/*        return (*/}
                            {/*            <p>*/}
                            {/*                {i + 1}. {item}*/}
                            {/*                <sup>2</sup>*/}
                            {/*            </p>*/}
                            {/*        );*/}
                            {/*    })}*/}
                            {/*</ol>*/}
                        </div>
                        <h6>total area</h6>
                        <h1 className="total_area">
                            {apartment.area}<sup>2</sup>
                        </h1>
                        {apartment.pdf && <a href={"/" + apartment.pdf.path + "/" + apartment.pdf.title} target="_blank"
                            className="flex centered pdf">
                            <img src={Pdf} alt=""/>
                            <p>Download pdf</p>
                        </a>}
                    </div>
                    {apartment.file && <img className="apartment_img" src={"/"+apartment.file.path+"/"+apartment.file.title} alt="" />}
                    <ContactInfo color="#334E60" right />
                </div>
            </div>
        </Layout>
    );
};

export default Apartment;
