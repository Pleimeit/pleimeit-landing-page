"use client";
import Link from "next/link";
import Image from "next/image";
import PleimitLogo from "../../../public/images/home/PleimitLogo.png";
import PleimitLogoBurger from "../../../public/images/home/PleimitLogoBurger.png";
import AppStore from "../../../public/images/home/AppStore.png";
import GooglePlay from "../../../public/images/home/GooglePlay.png";
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
      const isMobile = window.innerWidth < 1280;
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

  const navItemClasses = "cursor-pointer text-white transition hover:scale-110";

  return (
    <nav className=" fixed top-0 w-full bg-purpleBackground z-50">
      <div className="section-container flex justify-between items-center xs:h-30 xl:h-18">
        <Link href="/" onClick={handleLinkClick}>
          <Image
            src={isMenuOpenState ? PleimitLogoBurger : PleimitLogo}
            alt="logo"
            height={100}
            width={170}
            className="w-28 xl:w-30"
          />
        </Link>

        <ul className="hidden xl:flex gap-40 font-raleway text-sm tracking-[0.25em] uppercase">
          <li className={navItemClasses}>
            <Link href="/" onClick={handleLinkClick}>
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
            className="xl:hidden text-white"
            aria-label="open-menu"
          >
            <FaBars size={35} />
          </button>
        )}
      </div>

      {isMenuOpenState && (
        <div className="fixed top-0 left-0 w-full h-full bg-white p-8 z-50 menu-slide-down flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" onClick={toggleMenu}>
              <Image
                src={PleimitLogoBurger}
                alt="logo"
                width={140}
                height={140}
              />
            </Link>

            <button
              onClick={toggleMenu}
              aria-label="close menu"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
            >
              <FaTimes size={15} className="text-white" />
            </button>
          </div>

          <ul className="flex flex-col gap-20 text-purpleBackground font-raleway font-bold text-xl">
            <li onClick={handleLinkClick}>HOME</li>
            <li onClick={handleLinkClick}>NOSOTROS</li>
            <li onClick={handleLinkClick}>CONTACTO</li>
          </ul>

          <div className="mt-auto">
            <div className="flex gap-3 mb-6 items-center justify-center">
              <Image src={AppStore} alt="app-store" height={150} width={110} />
              <Image
                src={GooglePlay}
                alt="google-play"
                height={150}
                width={110}
              />
            </div>

            <p className="text-black text-sm text-center font-bebas tracking-[0.25em] uppercase">
              PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
