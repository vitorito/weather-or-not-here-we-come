import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <footer
      className="relative flex flex-col items-center lg:justify-center md:gap-1 grow
      w-full py-4 md:py-2 text-sm text-gray-700 dark:text-gray-400
      before:absolute before:top-0 before:hidden dark:before:lg:block
      before:w-4/5 before:max-w-6xl before:mx-auto before:border-t-2 before:border-t-gray-700"
    >
      <p className="flex items-center justify-center gap-1 xl:-translate-y-1/4">
        <BsGithub size={18} />
        <span>Feito por </span>
        <a
          href="https://github.com/vitorito/weather-or-not-here-we-come"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-500 dark:hover:text-gray-300"
        >
          Vitorito
        </a>
      </p>
      <p className="xl:-translate-y-1/4">
        <span>Dados metereológicos por </span>
        <a
          href="https://open-meteo.com/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-500 dark:hover:text-gray-300"
        >
          Open-Meteo.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
