import { background, curve, heroBackground, robot } from "../assets";
import logoFluxy from "../assets/hero/logoFluxy.png";
import subiteSlogan from "../assets/hero/subite-y-entrena-volando.svg";
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
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        className="container relative gap-4 columns-2 bg-fluxyPurple"
        ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 relative text-fluxyOrange">
            Fluxy is landing soon in Buenos Aires, Argentina... {` `}
          </h1>
          <img
            className="mx-auto mb-10"
            src={subiteSlogan}
            width={624}
            height={10}
          />
          <button
            href="/pricing"
            className="mx-auto border-2 border-white rounded-l shadow-lg px-5 py-1 hover:text-gray-400"
          >
            OBTENE TU CLASE GRATIS!
          </button>
        </div>
        <div className="max-w-[23rem] mx-auto mb-8 md:max-w-5xl">
          <img
            src={logoFluxy}
            className="mx-auto"
            width={1024}
            height={490}
            alt="Logo Fluxy"
          />
        </div>
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>
    </Section>
  );
};

export default Hero;
