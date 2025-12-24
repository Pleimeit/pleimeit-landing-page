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
  const [activeLinkState, setActiveLinkState] = useState("/");
  const [isMobileState, setIsMobileState] = useState(false);

  const toggleMenu = () => {
    if (isMobileState) {
      setIsMenuOpenState((prev) => !prev);
    }
  };

  const handleLinkClick = (path: string) => {
    setActiveLinkState(path);
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

  const getNavItemClasses = (path: string) =>
    `cursor-pointer text-white hover:scale-110 transition ${
      activeLinkState === path
        ? "underline underline-offset-4 decoration-4 decoration-orange font-bold"
        : ""
    }`;

  return (
    <nav className="fixed top-0 w-full bg-purpleBackground z-50">
      <div
        className="container mx-auto mt-2.5
    flex justify-between items-center
    xs:h-30 xl:h-26.25
   "
      >
        <Link href="/" onClick={() => handleLinkClick("/")}>
          <Image
            src={isMenuOpenState ? PleimitLogoBurger : PleimitLogo}
            alt="logo"
            height={100}
            width={170}
            className="w-28 xl:w-30"
          />
        </Link>

        <ul className="hidden xl:flex gap-40 text-[18px] font-raleway ">
          <li className={getNavItemClasses("/")}>
            <Link href="/" onClick={() => handleLinkClick("/")}>
              Home
            </Link>
          </li>
          <li className={getNavItemClasses("/#aboutUs")}>
            <Link href="/#about" onClick={() => handleLinkClick("/#aboutUs")}>
              Nosotros
            </Link>
          </li>
          <li className={getNavItemClasses("/#contact")}>
            <Link href="/#contact" onClick={() => handleLinkClick("/#contact")}>
              Contacto
            </Link>
          </li>
        </ul>

        {!isMenuOpenState && (
          <button
            onClick={toggleMenu}
            className="xl:hidden text-white"
            aria-label="open-menú"
          >
            <FaBars size={35} />
          </button>
        )}
      </div>

      {isMenuOpenState && (
        <div className="fixed top-0 left-0 w-full h-full bg-white p-8 z-50 menuSlideDown flex flex-col   menu-slide-down">
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

          <ul className="flex font-raleway flex-col gap-20 text-purpleBackground font-bold text-xl">
            <li onClick={() => handleLinkClick("/")}>Home</li>
            <li onClick={() => handleLinkClick("/#about")}>Nosotros</li>
            <li onClick={() => handleLinkClick("/#contact")}>Contacto</li>
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

            <h1 className="text-black text-sm text-center">
              PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
            </h1>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
