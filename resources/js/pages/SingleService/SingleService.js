import React, { useEffect } from "react";
import { BackButton } from "../../components/Buttons/Buttons";
import Showcase from "../../components/Showcase/Showcase";

import "../../pages/Services/Services";
import "./SingleService.css";
import { PagePath } from "../../components/PagePath/PagePath";
import DragSlide from "./DragSlide/DragSlide";
import { NextServiceBox } from "../../components/NextServiceBox/NextServiceBox";
import Layout from "../../Layouts/Layout";

const SingleService = () => {
  const sliderImages = ["/img/services/1.png", "/img/services/2.png", "/img/services/3.png", "/img/services/4.png", "/img/services/1.png", "/img/services/2.png", "/img/services/3.png", "/img/services/4.png"];

  return (
      <Layout>
          <div className="singleService servicePage">
              <Showcase short />
              <BackButton color="#334E60" link="/services" />
              <PagePath loc1="home" loc2="Services" loc3="Spa & Aesthetics Center" />
              <div className="wrapper">
                  <div className="flex main one">
                      <div className="img" data-aos="fade-right">
                          <img src="/img/services/3.png" alt="" />
                      </div>
                      <div className="content">
                          <img className="icon" src="/img/icons/home/spa.svg" alt="" />
                          <div className="playfair">Spa & Aesthetics Center</div>
                          <div className="subtitle">
                              “Sometimes the most productive thing you can do is relax
                          </div>
                          <p>
                              Each piece in the MooM’s collections holds a unique message and
                              style to be considered by the viewer, offering a historical
                              reference to the diversity of art within the present time.This is
                              truly a growing tribute to the talent and creativity we find in.
                          </p>
                          <p>
                              The role that curators play, like the art they care for, is
                              constantly evolving. As culture shifts, moving with changes in the
                              social and political landscape or technological innovations so
                              does the art being produced
                          </p>
                          <p>
                              Each piece in the MooM’s collections holds a unique message and
                              style to be considered by the viewer, offering a historical
                              reference to the diversity of art within the present time.This is
                              truly a growing tribute to the talent and creativity we find in.
                          </p>
                          <p>
                              The role that curators play, like the art they care for, is
                              constantly evolving. As culture shifts, moving with changes in the
                              social and political landscape or technological innovations so
                              does the art being produced
                          </p>
                      </div>
                  </div>
                  <div className="flex main two">
                      <div className="content">
                          <div className="subtitle">
                              “Sometimes the most productive thing you can do is relax
                          </div>
                          <p>
                              Each piece in the MooM’s collections holds a unique message and
                              style to be considered by the viewer, offering a historical
                              reference to the diversity of art within the present time.This is
                              truly a growing tribute to the talent and creativity we find in.
                          </p>
                          <p>
                              The role that curators play, like the art they care for, is
                              constantly evolving. As culture shifts, moving with changes in the
                              social and political landscape or technological innovations so
                              does the art being produced
                          </p>
                          <p>
                              Each piece in the MooM’s collections holds a unique message and
                              style to be considered by the viewer, offering a historical
                              reference to the diversity of art within the present time.This is
                              truly a growing tribute to the talent and creativity we find in.
                          </p>
                      </div>
                      <div className="img" data-aos="fade-left">
                          <img src="/img/services/4.png" alt="" />
                      </div>
                  </div>
              </div>
              <DragSlide sliderData={sliderImages} />
              <NextServiceBox
                  link="/"
                  background="/img/services/2.png"
                  title="Café / Restaurant"
                  icon="/img/icons/home/coffee-cup.svg"
              />
          </div>

      </Layout>
  );
};

export default SingleService;
