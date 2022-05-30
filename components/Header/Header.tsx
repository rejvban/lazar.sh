import Link from 'next/link';
import Image from 'next/image';
import { ThemeSwitch } from '../ThemeSwitch';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const t = useTranslations('Header');

  return (
    <header className="flex items-center justify-end py-8">
      <div className="flex items-center text-base leading-5 w-full">
        <div className="grow">
          <Link href="/" passHref>
            <a>
              {theme === 'dark' ? (
                <Image
                  height={32}
                  width={32}
                  src="/logo-white.svg"
                  alt="L-White"
                />
              ) : (
                <Image
                  height={32}
                  width={32}
                  src="/logo-black.svg"
                  alt="L-Black"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="hidden sm:block">
          <Link href="/blog">
            <a className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
              {t('blog')}
            </a>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export { Header };
