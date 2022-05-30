import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { LocaleSwitch } from '../LocaleSwitch';

const Footer: React.FC = () => {
  return (
    <footer className="mt-4 flex justify-end py-4 font-light dark:text-white lg:py-4">
      <div className="flex flex-grow">
        <LocaleSwitch />
      </div>
      <div className="flex">
        <a
          className="p-1 mx-1"
          target="_blank"
          href="https://www.github.com/rejvban/"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="p-1 mx-1"
          target="_blank"
          href="https://www.linkedin.com/in/lkaric/"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
