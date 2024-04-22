import { background, curve, heroBackground, robot } from "../assets";
import logoFluxy from "../assets/hero/fluxy-logo-transparent.svg";
import subiteSlogan from "../assets/hero/subite-y-entrena-volando.svg";
import subiteSloganPurple from "../assets/hero/subite-y-entrena-volando-purple.svg";
import litteLoop from "../assets/hero/little-loop.svg";
import superFUNKtional from "../assets/hero/superFUNKtional.svg";
import superFUNKtionalPurple from "../assets/hero/superFUNKtional-purple.svg";
import fluxyNeon from "../assets/hero/fluxy-neon.png";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import HeroCarousel from "./HeroCarousel";

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
        <button
          href="#"
          className="mx-auto border-2 border-white bg-fluxyPurple rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-fluxyPurple/80 hover:text-white"
        >
          PEDI TU CLASE GRATIS!
        </button>
      </div>
      {/* <div className="flex flex-col items-end -translate-y-20 md:mr-10 z-0">
        <img
          className="px-10 md:px-2 self-end -translate-y-20"
          src={litteLoop}
          width={624}
          height={10}
        />
      </div> */}
    </Section>
  );
};

export default Hero;
