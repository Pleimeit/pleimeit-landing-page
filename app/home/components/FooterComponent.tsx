import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-white border-t border-gray-200 lg:snap-center lg:scroll-mt-4.5">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <ul className="flex flex-col font-inter lg:flex-row gap-6 xs:text-md lg:text-lg text-textBlack font-medium">
            <li>
              <Link href="#contact" className="hover:text-purpleBackground">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-purpleBackground">
                Términos de uso
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-purpleBackground">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-purpleBackground">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <Image
              src="/images/home/PleimitLogoBurger.png"
              alt="Pleimeit"
              width={120}
              height={40}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 text-center">
          <div className="flex lg:hidden items-center gap-6 justify-between xs:justify-between">
            <Image
              src="/images/home/PleimitLogoBurger.png"
              alt="Pleimeit"
              width={120}
              height={40}
            />

            <div className="flex gap-6 text-gray-800">
              <a href="#" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube size={22} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div
              className="
                w-full
                flex font-inter
                flex-col
                items-center
                text-center
                gap-2
                xs:text-xs
                lg:text-sm
                text-textGraySecundary
                lg:flex-row
                lg:items-start
                lg:text-left
              "
            >
              <p>© 2025 Pleimeit. Todos los derechos reservados.</p>
              <p>Diseñado con 💜 para deportistas y comunidades activas.</p>
            </div>

            <div className="hidden lg:flex xs:justify-between gap-6 text-gray-800">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </Link>

              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
