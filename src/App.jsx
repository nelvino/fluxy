import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import QueEsFluxy from "./components/QueEsFluxy";
import MobileApp from "./components/MobileApp";
import WhatsAppIcon from "./components/WhatsAppIcon";
import HeroCarouselFullScreen from "../src/components/HeroCarouselFullScreen";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-white">
        <Helmet>
          <title>Fluxy</title>
          <meta
            name="description"
            content="Fluxy Argentina es un gimnasio ubicado en Buenos Aires, Argentina. En Fluxy reconocemos y valoramos nuestro cuerpo como el mayor tesoro que hemos recibido en esta vida más allá de su apariencia actual. Es por esto que estamos convencidos que la salud, el ejercicio y el bienestar cotidiano, deben ser integrados individual y colectivamente, como nuestro principal medio y propósito en este viaje personal que llamamos vida.
            Para lograrlo, nos comprometemos día tras día con la sociedad, fomentando la inclusión de             hábitos saludables vinculados al cuidado propio. Con entusiasmo, divertimento y buena predisposición nos enfocaremos en el disfrute del tiempo presente, convirtiéndolo en nuestro principal aliado. De este modo nos embarcaremos juntos en este viaje cotidiano, invitando a todas las personas que deseen escaparse por un rato de la rutina agitada, para liberarse de la congestión diaria.
            Aprovecharemos al máximo cada minuto de entrenamiento siendo guiados por especialistas de preparación en alto rendimiento. Utilizando así también las mejores herramientas disponibles            para potenciar nuestro recorrido en la búsqueda personal que conlleva al poder de la integridad entre: el cuerpo, la mente, el alma y el corazón."
          />{" "}
          <meta
            name="keywords"
            content="Fluxy, Fluxy Argentina, Gym, Fluxy Gym, Gimnasio, Argentina, Entrenamiento, Super Funktional Training, Giramondo"
          />{" "}
        </Helmet>
        <Header />
        <HeroCarouselFullScreen />
        {/* <Hero /> */}
        <QueEsFluxy />
        <MobileApp />
        {/* <Benefits /> */}
        {/* <Collaboration /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <Footer />
        <WhatsAppIcon />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
