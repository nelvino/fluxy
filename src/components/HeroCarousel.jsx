import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import HeroGreyBubble from "../../images/landing/HeroGreyBubble.svg"
import HeroLightBlueBubble from "../../images/landing/HeroLightBlueBubble.svg"
import HeroBlueBubble from "../../images/landing/HeroBlueBubble.svg"
import HeroGoldBubble from "../../images/landing/HeroGoldBubble.svg"
import DidYouKnowIcon from "../../images/landing/didYouKnowIcon.svg"
import "@fontsource/karla"
import { AnimateIn } from "../AnimateIn"

const HeroCarousel = () => (
  <>
    <div className="font-karla hidden md:block">
      <Carousel
        id="carouselHeight"
        variant="dark"
        controls={false}
        style={{ height: "60vh" }}
      >
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-5">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
                <div className="flex justify-center pt-3">
                  <a
                    href="/book-demo"
                    className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                  >
                    Book a Demo
                  </a>
                </div>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroGreyBubble}
                  alt="HeroGreyBubble"
                ></img>
              </AnimateIn>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-10">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
                <div className="flex justify-center pt-3">
                  <a
                    href="/book-demo"
                    className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                  >
                    Book a Demo
                  </a>
                </div>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroLightBlueBubble}
                  alt="HeroLightBlueBubble"
                ></img>
              </AnimateIn>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-10">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
                <div className="flex justify-center pt-3">
                  <a
                    href="/book-demo"
                    className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                  >
                    Book a Demo
                  </a>
                </div>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroBlueBubble}
                  alt="HeroBlueBubble"
                ></img>
              </AnimateIn>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-10">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
                <div className="flex justify-center pt-3">
                  <a
                    href="/book-demo"
                    className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                  >
                    Book a Demo
                  </a>
                </div>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroGoldBubble}
                  alt="HeroGoldBubble"
                ></img>
              </AnimateIn>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="font-karla md:hidden">
      <Carousel id="carouselHeight" variant="dark" controls={false}>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-5">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56 pb-3"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroGreyBubble}
                  alt="HeroGreyBubble"
                ></img>
              </AnimateIn>
              <div className="flex justify-center pt-3">
                <a
                  href="/book-demo"
                  className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-10">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56 pb-3"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroLightBlueBubble}
                  alt="HeroLightBlueBubble"
                ></img>
              </AnimateIn>
              <div className="flex justify-center pt-3">
                <a
                  href="/book-demo"
                  className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-10">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56 pb-3"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroBlueBubble}
                  alt="HeroBlueBubble"
                ></img>
              </AnimateIn>
              <div className="flex justify-center pt-3">
                <a
                  href="/book-demo"
                  className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="slideHeight">
          <div className="bg-white py-10">
            <div className="container grid sm:grid-cols-2 sm:gap-10 items-center">
              <AnimateIn className="w-full pl-10 px-4">
                <img
                  className="w-full h-56 pb-3"
                  src={DidYouKnowIcon}
                  alt="DidYouKnowIcon"
                ></img>
              </AnimateIn>
              <AnimateIn direction="right" className="w-full pl-10 px-4">
                <img
                  className="max-h-64"
                  src={HeroGoldBubble}
                  alt="HeroGoldBubble"
                ></img>
              </AnimateIn>
              <div className="flex justify-center pt-3">
                <a
                  href="/book-demo"
                  className="inline-block bg-gold_300 py-3 md:py-4 px-4 md:px-6 mb-3 md:mb-1 text-base font-bold leading-none text-white rounded no-underline hover:bg-gold_200 transition-colors duration-300"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </>
)

export default HeroCarousel
