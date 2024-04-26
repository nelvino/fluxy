import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logoFluxy from "../assets/hero/fluxy-logo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import Section from "./Section";
import { socials } from "../constants";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 text-white w-full z-50 pt-2 ${
        openNavigation ? "bg-fluxyPurple" : "bg-fluxyPurple"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 bg-fluxyPurple">
        <a className="block w-[12rem] xl:mr-8" href="#home">
          <img src={logoFluxy} width={120} alt="logoFluxy" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed my-2.5 top-[5rem] text-white left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center text-white justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font- text-2xl text-white hover:text-gray-50 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 text-white lg:text-l lg:font-semibold  ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-fluxyOrange"
                    : "lg:text-white"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
            <Button className="flex lg:hidden mt-5" href="#mobileApp">
              INGRESAR
            </Button>
            <Section crosses className="!px-0 !pt-10 !pb-5 flex lg:hidden">
              <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <div className="flex gap-2 flex-wrap">
                  <ul className="flex gap-2 flex-wrap">
                    {socials.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 border bg-white rounded-full transition-colors hover:bg-gray-500"
                      >
                        <img
                          src={item.iconUrl}
                          width={16}
                          height={16}
                          alt={item.title}
                        />
                      </a>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
            <Section crosses className="!px-0 !py-5 flex lg:hidden">
              <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <div>
                  <p className="block caption text-white">
                    © {new Date().getFullYear()}. Todos los derechos reservados
                    por Fluxy.
                  </p>
                </div>
              </div>
            </Section>
          </div>

          <HamburgerMenu />
        </nav>
        <ul className="lg:flex gap-3 flex-wrap mr-10 hidden">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 border bg-white rounded-full transition-colors hover:bg-gray-500"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
        <Button className="hidden lg:flex" href="#mobileApp">
          INGRESAR
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
