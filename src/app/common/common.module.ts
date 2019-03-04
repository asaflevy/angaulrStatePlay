import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {CommonModule as ACommonModel} from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    NgZorroAntdModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  exports: [HeaderComponent, NgZorroAntdModule, ACommonModel]
})
export class CommonModule {
}
