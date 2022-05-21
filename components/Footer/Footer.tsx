import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="mt-4 flex justify-end py-4 font-light dark:text-white lg:py-4">
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
    </footer>
  );
};

export { Footer };
