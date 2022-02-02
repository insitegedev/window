import React from "react";
import "./VideoPopup.css";

export const VideoPopup = ({ showVideo, hideVideo }) => {
  return (
    <div className={showVideo ? "video_popup show" : "video_popup"}>
      <div
        className="flex centered container"
        style={{ width: "100%", height: "100%" }}
      >
        <button className="close flex centered" onClick={hideVideo}>
          <img src="/img/icons/home/x.svg" alt="" />
        </button>
        <iframe
          src="https://www.youtube.com/embed/zr4r3n5Smho"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
