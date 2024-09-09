import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../data/slides";
import { useHeroSlider } from "../hooks/useHeroSlider";

export default function HeroSlider() {
  const { currentSlide, isMobile, nextSlide, prevSlide } = useHeroSlider();

  return (
    <section className="relative h-[532px] flex flex-col md:flex-row">
      <div className="relative flex-grow  h-full">
        <img
          src={
            isMobile
              ? slides[currentSlide].images.mobile
              : slides[currentSlide].images.desktop
          }
          alt="Furniture"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative md:w-1/2 lg:w-[600px] bg-white bg-opacity-90 md:bg-opacity-100 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          {slides[currentSlide].description}
        </p>
        <button className="flex items-center text-base sm:text-lg uppercase tracking-widest sm:tracking-[0.6rem] hover:text-gray-600">
          Shop now
          <ArrowRight className="ml-2 sm:ml-4" />
        </button>
      </div>
      <div className="absolute bottom-[52%] right-0 lg:bottom-0 lg:right-[465px] flex">
        <button
          onClick={prevSlide}
          className="bg-black text-white p-4 sm:p-6 hover:bg-gray-900"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black text-white p-4 sm:p-6 hover:bg-gray-900"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
