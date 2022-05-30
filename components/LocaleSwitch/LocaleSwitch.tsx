import { useRouter } from 'next/router';
import clx from 'classnames';
import Link from 'next/link';

interface LocaleButtonProps {
  locale: string;
}

const LocaleButton: React.FC<LocaleButtonProps> = ({ locale }) => {
  const { locale: currentLocale, pathname, query } = useRouter();

  return (
    <Link href={{ pathname, query }} locale={locale}>
      <span
        className={clx('text-xs', 'cursor-pointer', 'uppercase', {
          'font-semibold': currentLocale === locale,
          'text-sm': currentLocale === locale,
        })}
      >
        {locale}
      </span>
    </Link>
  );
};

const LocaleSwitch: React.FC = () => {
  return (
    <div>
      <LocaleButton locale="en" />/<LocaleButton locale="sr" />
    </div>
  );
};

export { LocaleSwitch };
