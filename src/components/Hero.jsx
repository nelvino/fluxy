import { background, curve, heroBackground, robot } from "../assets";
import logoFluxy from "../assets/hero/fluxy-logo-transparent.svg";
import subiteSlogan from "../assets/hero/subite-y-entrena-volando.svg";
import superFUNKtional from "../assets/hero/superFUNKtional.svg";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="h-screen pt-[12rem] -mt-[5.25rem] mb-20"
      // crosses
      // crossesOffset="lg:translate-y-[5.25rem]"
      // customPaddings
      id="hero"
    >
      <div className="container md:pt-10 lg:pt-20 lg:mb-20">
        <img
          className="mx-auto mb-10 w-full"
          src={superFUNKtional}
          width={624}
          height={10}
        />
      </div>
      {/* <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 relative text-fluxyOrange">
            Fluxy is landing soon in Buenos Aires, Argentina... {` `}
          </h1>
        </div>
      </div> */}
      <div className="container">
        <img
          className="mx-auto mb-10"
          src={logoFluxy}
          width={524}
          // height={10}
        />
      </div>
      {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      <div className="">
        <img
          className="mx-auto mb-10 px-10 md:px-2"
          src={subiteSlogan}
          width={624}
          height={10}
        />
      </div>
      <div className="container relative mx-auto text-center">
        <button
          href="#"
          className="mx-auto border-2 border-white rounded-xl rounded-tr-2xl shadow-lg px-5 py-2 hover:bg-gray-200 hover:text-fluxyPurple"
        >
          PEDI TU CLASE GRATIS!
        </button>
      </div>
    </Section>
  );
};

export default Hero;
