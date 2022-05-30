import { useTranslations } from 'next-intl';

import type { GetStaticProps, NextPage } from 'next';

const ErrorNotFound: NextPage = () => {
  const t = useTranslations('404');

  return (
    <div className="m-auto flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          {t('message')}
        </p>
        <p className="mb-4">{t('advice')}</p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../messages/${locale}.json`),
      },
    },
  };
};

export default ErrorNotFound;
