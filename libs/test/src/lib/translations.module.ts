import { MissingTranslationHandler, TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { I18nMissingTranslationHandler } from './i18n-missing-translation-handler';
import { I18N_RESOURCES } from './i18n';

@NgModule({
  imports: [
    TranslateModule.forChild({
      extend: true,
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useValue: new I18nMissingTranslationHandler(I18N_RESOURCES),
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [TranslateService],
})
export class TranslationsModule {}
