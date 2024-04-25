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
import WhatsAppIcon from './components/WhatsAppIcon';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-fluxyPurple">
        <Header />
        <Hero />
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
