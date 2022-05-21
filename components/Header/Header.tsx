import Link from 'next/link';
import Image from 'next/image';
import { ThemeSwitch } from '../ThemeSwitch';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const { theme } = useTheme();
  return (
    <header className="flex items-center justify-end py-8">
      <div className="flex items-center text-base leading-5 w-full">
        <div className="grow">
          {theme === 'dark' ? (
            <Image height={32} width={32} src="/logo-white.svg" alt="L-White" />
          ) : (
            <Image height={32} width={32} src="/logo-black.svg" alt="L-Black" />
          )}
        </div>
        <div className="hidden sm:block">
          <Link href="/blog">
            <a className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
              Blog
            </a>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export { Header };
