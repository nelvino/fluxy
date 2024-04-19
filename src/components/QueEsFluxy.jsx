import Section from "./Section";
import Heading from "./Heading";
import subiteSlogan from "../assets/hero/subite-y-entrena-volando.svg";
import { service1, service2, service3, check } from "../assets";
import fluxyAvion from "../assets/hero/fluxy-avion.png";
import fluxyNeon from "../assets/hero/fluxy-neon.png";
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

const QueEsFluxy = () => {
  return (
    <Section id="fluxy">
      <div className="container mt-10 text-white ">
        <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
        <h1 className="text-4xl mb-10">Sistema Comprobado</h1>
        <h4 className="text-2xl">La ciencia y los resultados obtenidos nos avalan!</h4>
        </div>
        {/* <Heading
          title="Sistema Comprobado"
          text="La ciencia y los resultados obtenidos nos avalan!"
        /> */}

        <div className="relative">
          <div id="app" className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={fluxyFun}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="fluxy Neon"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Super Funktional Training</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  En Fluxy estamos convencidos de que: It’s all about the
                  Journey! Te invitamos a acompañarnos en este periplo común
                  transformador...
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-white rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 font-GoldplayBold xl:px-8 text-fluxyPurple">
                <h4 className="h4 mb-4 font-F text-gray-500">Fluxy Lifestyle</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                 En Fluxy somos mucho mas que un gimnasio. Veni y aprende a cambiar tus habitos por completo! 
                </p>
              </div>

              <div className="relative h-[20rem] bg-white rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={fluxyNutricion}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="fluxy avion"
                />

                {/* <VideoChatMessage />
                <VideoBar /> */}
              </div>
            </div>
          </div>

          {/* <Gradient /> */}
        </div>
      </div>
    </Section>
  );
};

export default QueEsFluxy;
