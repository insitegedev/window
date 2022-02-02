import React from "react";
import {
  ArrowButton,
  BackButton,
  MainButton,
} from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";

import "./Services.css";
import Layout from "../../Layouts/Layout";

const Services = () => {
  const serviceBoxes = [
    {
      icon: "/img/icons/home/bell.svg",
      title: "Recipient / Reception",
      para: "The infrastructure of the complex includes: reception / reception, spa, parking, green yard",
    },
    {
      icon: "/img/icons/home/tree.svg",
      title: "Recreation Area With Kids Playground",
      para: "The infrastructure of the complex includes: reception / reception, spa, parking, green yard with children's playground and yard infrastructure, cafe-restaurant, 24-hour video surveillance.",
    },
    {
      icon: "/img/icons/home/parking-area.svg",
      title: "Parking Area",
      para: "The infrastructure of the complex includes: reception / reception, spa, parking, green yard with children's playground and yard infrastructure, cafe-restaurant",
    },
    {
      icon: "/img/icons/home/secure-shield.svg",
      title: "Security Service",
      para: "The infrastructure of the complex includes: reception / reception",
    },
    {
      icon: "/img/icons/home/cctv-camera.svg",
      title: "24/7 Video Monitoring",
      para: "The infrastructure of the complex includes: reception / reception, spa, parking, green yard with children's",
    },
    {
      icon: "/img/icons/home/key.svg",
      title: "Rental And Hotel Services",
      para: "The infrastructure of the complex includes: reception / reception, spa, parking, green yard with children's playground and yard infrastructure, cafe-restaurant",
    },
  ];
  return (
      <Layout>
          <div className="servicePage">
              <Showcase title="Services" />
              <BackButton color="#fff" link="/" />
              <ArrowButton color="#334E60" link="/" />
              <div className="container">
                  <div className="playfair">
                      Services You Have When Living In Window Bakuriani
                  </div>
                  <div className="flex first">
                      <div className="spabox flex centered" data-aos="fade-up">
                          <div className="inner_box">
                              <img src="/img/icons/home/spa.svg" alt="" className="icon" />
                              <div className="playfair">Spa & Aesthetics Center</div>
                              <p>“Sometimes the most productive thing you can do is relax</p>
                              <MainButton link="/single-service" dark text="learn more" />
                          </div>
                      </div>
                      <div className="side_boxes">
                          <div className="sidebox sb1 flex" data-aos="flip-right">
                              <div className="service_title">
                                  <img src="/img/icons/home/coffee-cup.svg" alt="" className="icon" />
                                  <div>Café / Restaurant</div>
                              </div>
                              <MainButton link="/single-service" dark text="learn more" />
                          </div>
                          <div className="sidebox sb2" data-aos="flip-left">
                              <p>
                                  The infrastructure of the complex includes: reception, spa,
                                  parking, green yard with children's playground and yard
                                  infrastructure, cafe-restaurant, 24-hour video surveillance,
                                  security, rental and hotel services.
                              </p>
                              <MainButton link="/about-us" dark text="more about us" />
                          </div>
                      </div>
                  </div>
                  <div className="other_services">
                      <div className="head">
                          <h6>other services</h6>
                          <p>“Sometimes the most productive thing you can do is relax</p>
                      </div>
                      <div className="grid">
                          {serviceBoxes.map((box) => {
                              return (
                                  <div className="box" data-aos="flip-up">
                                      <div className="service_title">
                                          <img className="icon" src={box.icon} alt="" />
                                          <div>{box.title}</div>
                                      </div>
                                      <p>{box.para}</p>
                                      <img src={box.icon} alt="" className="bg" />
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              </div>
          </div>

      </Layout>
  );
};

export default Services;
