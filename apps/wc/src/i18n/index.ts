
import en_US from './en_US.json';

enum I18N_LOCALES {
  'en_US' = 'en_US',
}

const I18N_RESOURCES = {
  [I18N_LOCALES.en_US]: en_US,
};

const DEFAULT_LOCALE = I18N_LOCALES.en_US;

export {
  I18N_RESOURCES,
  I18N_LOCALES,
  DEFAULT_LOCALE,
};
