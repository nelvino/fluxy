import * as React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Carousel_Bike from "../assets/carousel/Carousel_Bike.jpg";
import Carousel_Hero from "../assets/carousel/Carousel_Hero.jpg";
import Carousel_Hands from "../assets/carousel/Carousel_Hands.jpg";
import Carousel_Russian_Twists from "../assets/carousel/Carousel_ Russian_Twist.jpg";
import Carousel_Smile from "../assets/carousel/Carousel_Smile.jpg";
import Carousel_Subite from "../assets/carousel/Carousel_Subite.jpg";
import Carousel_Superfunktional from "../assets/carousel/Carousel_Superfunktional.jpg";

import Carousel_Hero_Mobile from "../assets/carousel/Carousel_Hero_Mobile.jpg";
import { Link } from "react-router-dom";

import { AnimateIn } from "./design/AnimateIn.jsx";

const WHATSAPP_URL = "https://wa.me/+5491136949578";

const HeroCarouselFullScreen = () => {
  const parallaxRef = useRef(null);

  return (
  <>
    <div className="hidden md:block bg-white mx-auto items-center" id="home" ref={parallaxRef}>
      <Carousel
        id="carouselHeight"
        controls={false}
        indicators={false}
        fade={false}
        interval={3000}
        pause={"hover"}
        style={{ height: "100vh" }}
      >
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Hero} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Bike} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Subite} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Hands} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Superfunktional} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Russian_Twists} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <img className="mx-auto" src={Carousel_Smile} alt=""></img>
          <Carousel.Caption className="mb-10 md:mb-20">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className=" md:hidden bg-white mx-auto my-auto items-center">
      <Carousel
        id="carouselHeight"
        indicators={false}
        fade={false}
        interval={3000}
        controls={false}
        style={{ height: "100vh" }}
      >
        <Carousel.Item className="slideHeight h-screen">
        <img className="mx-auto w-full h-screen" src={Carousel_Hero_Mobile} alt=""></img>
          <Carousel.Caption className="mb-14">
            <Link to={WHATSAPP_URL} target="_blank" className="">
              <button
                href="#"
                className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
              >
                PEDI TU CLASE GRATIS!
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </div>
  </>
);
  };

export default HeroCarouselFullScreen;
