import { NgModule } from '@angular/core';
import { TestModule } from '@lib/test';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    TestModule
  ]
})
export class TestWrapperModule {

  constructor(private translateService: TranslateService) {
    (window as any).wrapperts = translateService;
  }
}
