import React, { useState, useEffect } from "react";

import { ArrowRight } from "/img/icons/sm/smIcons";
import "./Home.css";
import Facilities from "./Facilities/Facilities";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { ArrowButton, MainButton } from "../../components/Buttons/Buttons";
import { VideoPopup } from "../../components/VideoPopup/VideoPopup";
import Layout from "../../Layouts/Layout";

const Home = ({sliders}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliders.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(index + 1);
  //     }, 5000);

  //     return () => {
  //       clearInterval(slider);
  //     };
  //   }, [index]);

  const moveDot = (i) => {
    setIndex(i);
  };

  const [showVideo, setShowVideo] = useState(false);
  return (
      <Layout>
          <div className="mainSlider">
              {sliders.map((data, indexData) => {
                  let position = "nextSlide";
                  if (indexData === index) {
                      position = "activeSlide";
                  }
                  if (
                      indexData === index - 1 ||
                      (index === 0 && indexData === data.length - 1)
                  ) {
                      position = "lastSlide";
                  }
                  return (
                      <article className={position} key={indexData}>
                          <div className="bg">
                              <img src={data.file.path+"/"+data.file.title} alt="hero img" />
                          </div>
                          <div className="content ">
                              <div className="playfair">{data.title}</div>
                              <div
                                  className="flex"
                                  style={{ justifyContent: "flex-start" }}
                                  data-aos="fade-right"
                              >
                                  <MainButton text="contact us" link={route("client.contact.index")} />
                                  <div
                                      className="play_vid flex center"
                                      onClick={() => setShowVideo(true)}
                                  >
                                      <div>Watch the video</div>
                                      <div className="circle">
                                          <img src="/img/icons/home/play.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                              <Facilities />
                          </div>
                      </article>
                  );
              })}
              <div className="flex centered controllers">
                  <button
                      onClick={() => setIndex(index - 1)}
                      className="arrow prev"
                      style={{ transform: "rotate(180deg)", marginTop: "-4px" }}
                  >
                      <ArrowRight color="#fff" />
                  </button>
                  <div className="dots flex">
                      {Array.from({ length: sliders.length }).map((item, i) => {
                          return (
                              <button
                                  key={i}
                                  onClick={() => moveDot(i)}
                                  className={index === i ? "active" : ""}
                              >
                                  0{i + 1}
                              </button>
                          );
                      })}
                  </div>

                  <button onClick={() => setIndex(index + 1)} className="arrow next">
                      <ArrowRight color="#fff" />
                  </button>
              </div>
              <SocialMedia color="#fff" />
              <ArrowButton color="#fff" link="/" />

              {/* video popup */}
              <VideoPopup showVideo={showVideo} hideVideo={() => setShowVideo(false)} />
          </div>

      </Layout>
  );
};

export default Home;
