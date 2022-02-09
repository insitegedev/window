import React from "react";
import "./GalleryPopup.css";

const GalleryPopup = ({ showPopup, image, closePopup }) => {
    return (
        <div className={showPopup ? "gallery_popup show" : "gallery_popup"}>
            <div className="container flex centered">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <button className="close" onClick={closePopup}>
                    <img src="/img/icons/home/x.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default GalleryPopup;
