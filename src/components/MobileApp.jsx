import Section from "./Section";
import Heading from "./Heading";
import subiteSlogan from "../assets/hero/subite-y-entrena-volando.svg";
import { service1, service2, service3, check } from "../assets";
import fluxyAvion from "../assets/hero/fluxy-avion.png";
import mobileApp from "../assets/mobileApp/mobile-app.svg";
import fluxyFun from "../assets/hero/fluxy-fun.svg";
import fluxyNutricion from "../assets/hero/fluxy-nutricion.svg";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const MobileApp = () => {
  return (
    <Section id="mobileApp">
      <div className="container">
      <h4 className="h4 mb-5 md:mb-10 mx-auto text-center">
                Aplicación Mobil
              </h4>
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="mobileApp"
                height={730}
                src={mobileApp}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto bg-fluxyPurple p-5 rounded-xl">
              <h4 className="h4 mb-4">
                Todo en una aplicación para nuestros miembros!
              </h4>
              <p className="body-2 mb-[3rem] text-white">
                Encontra los beneficios de nuestra plataforma y un sistema de
                trabajo digital integrado:
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              className="mx-auto mb-10 mt-10 md:mt-20"
              src={subiteSlogan}
              width={624}
              height={10}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MobileApp;
