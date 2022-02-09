import React, { useState, useEffect } from "react";

import "./Gallery.css";
import Showcase from "../../components/Showcase/Showcase";
import { ArrowButton, BackButton } from "../../components/Buttons/Buttons";
import { Pagination } from "../../components/Pagination/Pagination";
import GalleryPopup from "./GalleryPopup/GalleryPopup";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../../Layouts/Layout";

const Gallery = ({ galleries }) => {
    console.log(galleries);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const [showPopup, setShowPopup] = useState(false);
    const [imgSrc, setImgsrc] = useState();

    const galleryImages = [
        "/img/gallery/1.png",
        "/img/gallery/2.png",
        "/img/gallery/3.png",
        "/img/gallery/4.png",
        "/img/gallery/5.png",
        "/img/gallery/6.png",
        "/img/gallery/7.png",
        "/img/gallery/8.png",
        "/img/gallery/9.png",
        "/img/gallery/10.png",
        "/img/gallery/3.png",
        "/img/gallery/4.png",
        "/img/gallery/5.png",
        "/img/gallery/6.png",
        "/img/gallery/3.png",
    ];
    return (
        <Layout>
            <div className="galleryPage">
                <BackButton link="/" color="#fff" />
                <ArrowButton color="#334E60" link="#334E60" />
                <Showcase title="Gallery" />
                <div className="wrapper">
                    <div className="gallery_grid">
                        {galleries.data.map((img, i) => {
                            return (
                                <div
                                    className="img"
                                    key={i}
                                    onClick={() => {
                                        setShowPopup(true);
                                        setImgsrc(
                                            `/${img.file.path}/${img.file.title}`
                                        );
                                    }}
                                    data-aos="zoom-in-up"
                                >
                                    <img
                                        src={
                                            "/" +
                                            img.file.path +
                                            "/" +
                                            img.file.title
                                        }
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Pagination length={5} active={1} links={galleries.links} />
                </div>
                <GalleryPopup
                    closePopup={() => setShowPopup(false)}
                    showPopup={showPopup}
                    image={imgSrc}
                />
            </div>
        </Layout>
    );
};

export default Gallery;
