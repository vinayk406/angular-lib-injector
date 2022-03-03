import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LOCALE } from '../i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'wc';

  constructor(private translateService: TranslateService) {
    translateService.use(DEFAULT_LOCALE);
  }
}
