import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoreModule} from './storeModule/store.module';

const routes: Routes = [
  {path: '', loadChildren: 'src/app/storeModule/store.module#StoreModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
