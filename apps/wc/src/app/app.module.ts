import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nResourceLoader } from './i18n-resource-loader';
import { Router, RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

/**
 * translateFactory
 * Load resources from local json files
 *
 * @export
 * @returns
 */
export function translateFactory() {
  return new I18nResourceLoader();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
      },
      isolate: true,
    }),
    RouterModule.forRoot([{
      path: '',
      loadChildren: () => import('./test-wrapper.module').then(m => m.TestWrapperModule),
    }], {
      initialNavigation: 'disabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translateService: TranslateService, private injector: Injector, private router: Router) {
    (window as any).appts = translateService;
    this.router.initialNavigation();
  }
}
