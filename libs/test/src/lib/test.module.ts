import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nResourceLoader } from './i18n-resource-loader';
import { TestComponent } from './test.component';

import { TranslationsModule } from './translations.module';

import en_US from './i18n/en_US.json';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  component: TestComponent,
}]


export function translateFactory() {
  return new I18nResourceLoader();
}

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true,
      isolate: false,
      loader: {
        provide: TranslateLoader,
        useClass: I18nResourceLoader,
      }
    }),
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class TestModule {

  constructor(private translateService: TranslateService) {
    console.warn(translateService);
    (window as any).libts = translateService;
    // console.warn(translateService.getTranslation('en_US'));
    // translateService.setTranslation('en_US', en_US, true);
  }
}
