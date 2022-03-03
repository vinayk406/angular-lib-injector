import { TranslateLoader } from '@ngx-translate/core';
import { DEFAULT_LOCALE, I18N_LOCALES, I18N_RESOURCES } from '../i18n';
import { Observable, of } from 'rxjs';

export class I18nResourceLoader implements TranslateLoader {

  /**
   * getTranslation
   *
   * @param {string} locale
   * @returns {Observable<any>}
   * @memberof OrchestratorDemoI18nResourcesLoader
   */
  public getTranslation(locale: keyof typeof I18N_LOCALES): Observable<any> {
    return of(I18N_RESOURCES[locale] || I18N_RESOURCES[DEFAULT_LOCALE]);
  }
}
