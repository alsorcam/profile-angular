import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from './translate.service';
import { TRANSLATION_PROVIDER } from './translations';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  declarations: [
    TranslatePipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    TranslatePipe,
  ]
})
export class TranslateModule {
  static forRoot() {
    return {
      ngModule: TranslateModule,
      providers: [
        TRANSLATION_PROVIDER,
        TranslateService
      ]
    };
  }
}
