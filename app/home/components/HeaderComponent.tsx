"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false);
  const [isMobileState, setIsMobileState] = useState(false);

  const toggleMenu = () => {
    if (isMobileState) {
      setIsMenuOpenState((prev) => !prev);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpenState(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024; 
      setIsMobileState(isMobile);

      if (!isMobile) {
        setIsMenuOpenState(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpenState ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpenState]);

  const navItemClasses = "cursor-pointer text-white transition-all hover:scale-110";

  return (
    <nav className="w-full bg-purpleBackground">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex justify-between items-center h-18">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src="/images/home/PleimitLogo.png"
            alt="logo"
            height={100}
            width={170}
            className="w-28 xl:w-30"
          />
        </Link>

        <ul className="hidden lg:flex gap-10 font-raleway text-sm tracking-[0.25em] uppercase font-extrabold">
          <li className={navItemClasses}>
            <Link href="/#home" onClick={handleLinkClick}>
              HOME
            </Link>
          </li>
          <li className={navItemClasses}>
            <Link href="/#about" onClick={handleLinkClick}>
              NOSOTROS
            </Link>
          </li>
          <li className={navItemClasses}>
            <Link href="/#contact" onClick={handleLinkClick}>
              CONTACTO
            </Link>
          </li>
        </ul>

        {!isMenuOpenState && (
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white"
            aria-label="open-menu"
          >
            <FaBars size={35} />
          </button>
        )}
      </div>

      {isMenuOpenState && (
        <div className="fixed top-0 left-0 w-full h-full bg-purpleBackground px-6 md:px-8 py-8 z-50 flex flex-col animate-menu-smooth">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" onClick={toggleMenu}>
              <Image 
                src="/images/home/PleimitLogo.png" 
                alt="logo" 
                width={140} 
                height={50}
              />
            </Link>

            <button
              onClick={toggleMenu}
              aria-label="close menu"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform hover:scale-110"
            >
              <FaTimes size={15} className="text-white" />
            </button>
          </div>

          <ul className="flex flex-col gap-12 text-white tracking-[0.22em] font-raleway font-extrabold text-xl">
            <li>
              <Link href="/#home" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>

            <li>
              <Link href="/#about" onClick={handleLinkClick}>
                NOSOTROS
              </Link>
            </li>

            <li>
              <Link href="/#contact" onClick={handleLinkClick}>
                CONTACTO
              </Link>
            </li>
          </ul>

          <div className="mt-auto">
            <div className="flex gap-4 mb-6 items-center justify-center">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/home/AppStore.png"
                  alt="app-store"
                  height={250}
                  width={150}
                  className="h-13 w-auto cursor-pointer transition-transform hover:scale-105"
                />
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/home/GooglePlay.png"
                  alt="google-play"
                  height={250}
                  width={150}
                  className="h-13 w-auto cursor-pointer transition-transform hover:scale-105"
                />
              </Link>
            </div>

            <p className="text-white text-[13px] text-center font-bebas tracking-[0.25em] uppercase">
              PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
