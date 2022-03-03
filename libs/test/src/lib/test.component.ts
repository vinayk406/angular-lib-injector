import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LOCALE } from './i18n';

@Component({
  selector: 'app-test',
  template:`
    <h2>{{ 'LIB.FIRST_NAME' | translate }}</h2>
    <br>
    <h2>{{ 'LIB.LAST_NAME' | translate }}</h2>
  `
})
export class TestComponent {

  constructor(private translateService: TranslateService) {
    console.warn('inside test component', translateService);
    (window as any).libcts = translateService;
    this.translateService.use(DEFAULT_LOCALE);
  }

}
