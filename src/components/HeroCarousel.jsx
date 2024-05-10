import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import fluxyLogoSvg from "../assets/hero/fluxy-logo.svg";
import fluxyLogoPurpleSvg from "../assets/hero/fluxy-logo-purple.svg";
import Carousel_Bike from "../assets/carousel/Carousel_Bike_1918x950.jpg";
import Carousel_Hero from "../assets/carousel/Carousel_Hero_1918x950.jpg";
import Carousel_Hands from "../assets/carousel/Carousel_Hands_1918x950.jpg";
import Carousel_Russian_Twists from "../assets/carousel/Carousel_Russian_Twist_1918x950.jpg";
import Carousel_Smile from "../assets/carousel/Carousel_Smile_1918x950.jpg";
import Carousel_Subite from "../assets/carousel/Carousel_Subite_1918x950.jpg";
import Carousel_Superfunktional from "../assets/carousel/Carousel_Superfunktional_1918x950.jpg";

import { AnimateIn } from "../components/design/AnimateIn.jsx"

const HeroCarousel = () => (
  <>
    <div className="hidden md:block bg-white mx-auto items-center">
      <Carousel
        id="carouselHeight"
        controls={false}
        indicators={false}
        fade={false}
        interval={3000}
        pause={"hover"}
        style={{ height: "40vh" }}
      >
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={fluxyLogoPurpleSvg}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Bike}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Hero}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Hands}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Russian_Twists}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Superfunktional}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Subite}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="py-5">
            <div className="container">
              <div direction="up" className="w-full px-4">
                <img
                  className="max-h-64 mx-auto"
                  src={Carousel_Smile}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className=" md:hidden bg-white mx-auto items-center">
      <Carousel id="carouselHeight" indicators={false}
        fade={false}
        interval={3000} controls={false}>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-5">
            <div className="container">
              <div className="w-full pl-10 px-4">
                <img
                  className="w-full h-56 pb-3 mx-auto"
                  src={fluxyLogoPurpleSvg}
                  alt="fluxyLogoPurpleSvg"
                ></img>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </>
)

export default HeroCarousel
