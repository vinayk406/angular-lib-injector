

import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateService,
} from '@ngx-translate/core';

import { DEFAULT_LOCALE } from './i18n';

/**
 * Custom loader for DEEM i18n resources
 *
 * @export
 * @class I18nMissingTranslationHandler
 * @implements {MissingTranslationHandler}
 */
export class I18nMissingTranslationHandler implements MissingTranslationHandler {

  private loadedExtraResources: { [lang: string]: boolean } = {};

  /**
   * Creates an instance of I18nMissingTranslationHandler.
   * @param {GenericObject} extraI18nResources
   * @memberof I18nMissingTranslationHandler
   */
  constructor(private extraI18nResources: any) { }

  /**
   * append extraI18nResources to existing translation data
   *
   * @param {MissingTranslationHandlerParams} params
   * @returns
   * @memberof I18nMissingTranslationHandler
   */
  public handle(params: MissingTranslationHandlerParams) {
    const service: TranslateService = params.translateService;
    // Get supported locale
    const lang: string = DEFAULT_LOCALE;

    const target = this.getTranslation(lang);

    if (!this.loadedExtraResources[lang]) {
      service.setTranslation(lang, target, true);
      this.loadedExtraResources[lang] = true;
    }

    return service.parser.interpolate(service.parser.getValue(target, params.key), params.interpolateParams);
  }

  /**
   * Load extraI18nResources by locale
   *
   * @param {string} locale
   * @returns Observable<any>
   * @memberof I18nMissingTranslationHandler
   */
  public getTranslation(locale: string): any {
    return this.extraI18nResources[locale] || this.extraI18nResources[DEFAULT_LOCALE];
  }
}
