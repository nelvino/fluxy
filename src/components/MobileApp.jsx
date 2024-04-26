import Section from "./Section";
import Heading from "./Heading";
import appStoreIcon from "../assets/mobileApp/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg";
import playStoreIcon from "../assets/mobileApp/google-play-badge-es.png";
import { check } from "../assets";
import mobileApp from "../assets/mobileApp/mobile-app.svg";
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
      <h4 className="h4 mb-5 md:mb-10 mx-auto text-center">Aplicación Mobil</h4>
      <div className="container">
        <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden my-5">
          <div className="absolute inset-0">
            <img
              src={mobileApp}
              className="h-full w-full object-cover"
              width={630}
              height={750}
              alt="fluxy Neon"
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 m-auto items-center bg-fluxyPurple/70">
            <div className="absolute text-white p-3 rounded-xl">
              <h4 className="h4 text-white p-3 rounded-xl mt-10">
                Todo en una aplicación para nuestros miembros!
              </h4>
              <p className="body-2 text-white p-3 rounded-xl">
                Encontra los beneficios de nuestra plataforma y un sistema de
                trabajo digital integrado:
              </p>
              <ul className="body-2 ">
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
              <div className="grid grid-cols-2 mb-1 justify-items-center items-center">
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=deportnet.apps.fluxy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <img
                      className="mx-auto mb-2 mt-2 md:mt-20 h-10"
                      src={appStoreIcon}
                      href=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=deportnet.apps.fluxy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <img
                      className="mx-auto mb-2 mt-2 md:mt-20 h-12"
                      src={playStoreIcon}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
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
            <div className="relative z-1 ml-auto bg-fluxyPurple/70 p-5 rounded-xl">
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
              <div className="grid grid-cols-2 mb-1 justify-items-center items-center">
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=deportnet.apps.fluxy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <img
                      className="mx-auto mb-2 mt-2 md:mt-20 h-10"
                      src={appStoreIcon}
                      href=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=deportnet.apps.fluxy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <img
                      className="mx-auto mb-2 mt-2 md:mt-20 h-12"
                      src={playStoreIcon}
                    />
                  </a>
                </div>
              </div>
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
      </div> */}
    </Section>
  );
};

export default MobileApp;
