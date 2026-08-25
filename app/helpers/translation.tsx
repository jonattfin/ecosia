export type ITranslationFunc = (slug: string) => string;

export const withTranslations =
  (translation: any) => (WrappedComponent: any) => {
    // eslint-disable-next-line react/display-name
    return ({ language, ...other }: any) => {
      const t = getTranslations(translation)(language);
      return <WrappedComponent {...{ t, language, ...other }} />;
    };
  };

function getTranslations(translation: any) {
  return (language: string): ITranslationFunc => {
    return (slug: string) => {
      const obj: any = translation[language];
      if (obj && obj[slug]) return obj[slug];

      return slug;
    };
  };
}
