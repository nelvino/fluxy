import * as React from "react";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// Desktop View Images
import Carousel_Bike from "../assets/carousel/Carousel_Bike_1918x950.jpg";
import Carousel_Hero from "../assets/carousel/Carousel_Hero_1918x950.jpg";
import Carousel_Hands from "../assets/carousel/Carousel_Hands_1918x950.jpg";
import Carousel_Russian_Twists from "../assets/carousel/Carousel_Russian_Twist_1918x950.jpg";
import Carousel_Smile from "../assets/carousel/Carousel_Smile_1918x950.jpg";
import Carousel_Subite from "../assets/carousel/Carousel_Subite_1918x950.jpg";
import Carousel_Superfunktional from "../assets/carousel/Carousel_Superfunktional_1918x950.jpg";

// Tablet view Images
import Carousel_Superfunktional_tablet from "../assets/carousel/Carousel_Superfunktional_1438x1079.jpg";
import Carousel_Russian_Twist_tablet from "../assets/carousel/Carousel_Russian_Twist_1438x1079.jpg";
import Carousel_Bike_tablet from "../assets/carousel/Carousel_Bike_1438x1079.jpg";
import Carousel_Hero_tablet from "../assets/carousel//Carousel_Hero_1438x1079.jpg";
import Carousel_Hands_tablet from "../assets/carousel/Carousel_Hands_1438x1079.jpg";
import Carousel_Smile_tablet from "../assets/carousel/Carousel_Smile_1438x1079.jpg";
import Carousel_Subite_tablet from "../assets/carousel/Carousel_Subite_1438x1079.jpg";

// Mobile view Images
import Carousel_Hero_Mobile from "../assets/carousel/Carousel_Hero_450x1000.jpg";
import Carousel_Bike_Mobile from "../assets/carousel/Carousel_Bike_450x1000.jpg";
import Carousel_Superfunktional_Mobile from "../assets/carousel/Carousel_Superfunktional_450x1000.jpg";
import Carousel_Russian_Twist_Mobile from "../assets/carousel/Carousel_Russian_Twist_450x1000.jpg";
import Carousel_Hands_Mobile from "../assets/carousel/Carousel_Hands_450x1000.jpg";
import Carousel_Smile_Mobile from "../assets/carousel/Carousel_Smile_450x1000.jpg";
import Carousel_Subite_Mobile from "../assets/carousel/Carousel_Subite_450x1000.jpg";


import { Link } from "react-router-dom";

import { AnimateIn } from "./design/AnimateIn.jsx";

const WHATSAPP_URL = "https://wa.me/+5491136949578";

const HeroCarouselFullScreen = () => {
  const parallaxRef = useRef(null);

  // const [activeIndex, setActiveIndex] = useState(0);
  // const [isRewinding, setIsRewinding] = useState(false);

  // const handleSelect = (index, direction) => {
  //   setActiveIndex(index);
  // };

  // const handleExited = () => {
  //   if (activeIndex === carouselItems.length - 1 && !isRewinding) {
  //     setIsRewinding(true);
  //     setTimeout(() => {
  //       setActiveIndex(0);
  //       setIsRewinding(false);
  //     }, 500);
  //   }
  // };

  return (
  <>
    <div className="hidden lg:block bg-white mx-auto items-center mb-10" id="home" ref={parallaxRef}>
      <Carousel
        id="carouselHeight"
        // activeIndex={activeIndex} 
        // onSelect={handleSelect} 
        // onExited={handleExited}
        controls={false}
        // slide={true}
        touch={true}
        indicators={true}
        fade={false}
        interval={3000}
        pause={"hover"}
        style={{ height: "90vh" }}
      >
        <Carousel.Item className="slideHeight">
          <img className="mx-auto h-screen w-full" src={Carousel_Hero} alt=""></img>
          <Carousel.Caption className="mb-28">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Hands} alt=""></img>
          <Carousel.Caption className="mb-28">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Russian_Twists} alt=""></img>
          <Carousel.Caption className="mb-28">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Superfunktional} alt=""></img>
          <Carousel.Caption className="mb-28">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Bike} alt=""></img>
          <Carousel.Caption className="mb-28">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Smile} alt=""></img>
          <Carousel.Caption className="mb-28">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Subite} alt=""></img>
          <Carousel.Caption className="mb-28">
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
    <div className="hidden md:block lg:hidden bg-white mx-auto items-center mb-10" id="home" ref={parallaxRef}>
      <Carousel
        id="carouselHeight"
        controls={false}
        // slide={true}
        touch={true}
        indicators={true}
        fade={false}
        interval={3000}
        pause={"hover"}
        style={{ height: "90vh" }}
      >
        <Carousel.Item className="slideHeight">
          <img className="mx-auto h-screen w-full" src={Carousel_Hero_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Hands_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Russian_Twist_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Superfunktional_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Bike_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Smile_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
          <img className="mx-auto h-screen w-full" src={Carousel_Subite_tablet} alt=""></img>
          <Carousel.Caption className="mb-24">
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
    <div className=" md:hidden bg-white mx-auto my-auto items-center pb-28">
      <Carousel
        id="carouselHeight"
        indicators={true}
        fade={false}
        interval={3000}
        controls={false}
        style={{ height: "85vh" }}
      >
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Hero_tablet} alt=""></img>
          <Carousel.Caption className="mb-40">
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
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Hands_Mobile} alt=""></img>
          <Carousel.Caption className="mb-40">
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
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Russian_Twist_Mobile} alt=""></img>
          <Carousel.Caption className="mb-40">
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
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Superfunktional_tablet} alt=""></img>
          <Carousel.Caption className="mb-40">
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
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Bike_Mobile} alt=""></img>
          <Carousel.Caption className="mb-40">
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
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Smile_Mobile} alt=""></img>
          <Carousel.Caption className="mb-40">
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
        <Carousel.Item className="slideHeight mb-20">
        <img className="mx-auto w-full h-screen" src={Carousel_Subite_tablet} alt=""></img>
          <Carousel.Caption className="mb-40">
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
