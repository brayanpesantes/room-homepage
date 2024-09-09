import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useHeroSlider } from "../hooks/useHeroSlider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useHeroSlider();

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 w-full">
      <nav className="flex items-center  p-3 lg:p-6 ">
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="text-white" />
          </button>
          <h1 className="text-2xl font-bold text-white ml-28 md:ml-0 md:mr-14 ">
            room
          </h1>
        </div>
        <ul
          className={` ${
            !isMobile && "translate-y-0 opacity-100  relative justify-start"
          } md:flex space-x-8  lg:text-white font-semibold transition-all duration-500 ease-in-out  ${
            isOpen
              ? "flex absolute top-0 left-0 right-0 z-10 bg-white text-black h-20 items-center justify-between px-6 "
              : "opacity-0"
          }`}
        >
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X className="text-gray-400" />
          </button>
          {["home", "shop", "about", "contact"].map((item) => (
            <li key={item}>
              <a href={`/${item}`} className="hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
