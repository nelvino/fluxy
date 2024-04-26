import { background, curve, heroBackground, robot } from "../assets";
import subiteSloganPurple from "../assets/hero/subite-y-entrena-volando-purple.svg";
import superFUNKtionalPurple from "../assets/hero/superFUNKtional-purple.svg";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import HeroCarousel from "./HeroCarousel";
import React from "react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/+5491136949578"; // Our mobile number

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-white h-screen"
      // crosses
      // crossesOffset="lg:translate-y-[5.25rem]"
      // customPaddings
      id="home"
    >
      <div className="container md:mt-5 lg:pt-10 lg:mb-10" ref={parallaxRef}>
        <img
          className="mx-auto mb-10 w-full"
          src={superFUNKtionalPurple}
          width={600}
          height={10}
        />
      </div>
      <HeroCarousel className="" />
      <div className="">
        <img
          className="mx-auto mb-10 px-10 md:px-2"
          src={subiteSloganPurple}
          width={624}
          height={10}
        />
      </div>
      <div className="mx-auto text-center pb-2 z-10">
        <Link to={WHATSAPP_URL} target="_blank" className=" ">
          <button
            href="#"
            className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
          >
            PEDI TU CLASE GRATIS!
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default Hero;
