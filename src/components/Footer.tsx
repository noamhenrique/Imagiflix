import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="mt-28 px-12 pb-4 text-white/40 text-sm">
      <FontAwesomeIcon
        className="mr-4 transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
        icon={faFacebookSquare}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
        icon={faInstagram}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
        icon={faTwitter}
        size="2x"
      />
      <FontAwesomeIcon
        className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
        icon={faYoutube}
        size="2x"
      />
      <div className="grid grid-cols-4 gap-2 my-8">
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Idiomas e legendas
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Audiodescrição
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Centro de ajuda
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Cartão pré-pago
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Imprensa
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Relação com investidores
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Carreiras
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Termos de uso
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Privacidade
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Avisos legais
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Preferências de Cookies
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Informações corporativas
        </a>
        <a
          className="transition-all duration-300 ease-in-out hover:text-white cursor-pointer"
          href="#"
        >
          Entre em contato
        </a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
