import {NgModule, ModuleWithProviders} from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatDialogModule,
  MatStepperModule,
  MatCheckboxModule,
  MatCardModule,
  MatRadioModule,
  MatChipsModule,
  MatTabsModule, MatProgressBarModule
} from '@angular/material';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressBarModule
  ],
  exports: [
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule
  ]
})
export class AngularMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularMaterialModule
    };
  }
}
