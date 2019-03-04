import {NgModule} from '@angular/core';
import {ControlPanelComponent} from './components/control-panel//control-panel.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './container/products/products.component';
import {CommonModule} from '../common/common.module';
import {ProductsService} from './services/products.service';
import {NgxsModule} from '@ngxs/store';
import {AllProductsState} from './store';
import {ProductComponent} from './components/product/product.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {ProductResolverService} from './services/product-resolver.service';
// import {ProductsGuard} from './Guard/products.guard';


const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      //{path: 'edit/:id', component: ProductEditComponent, resolve: {productData: ProductResolverService}},
      {path: 'edit/:id', component: ProductEditComponent},
    ]
  }
];

@NgModule({
  declarations: [ControlPanelComponent, ProductsComponent, ProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([
      ...AllProductsState,
    ]),
    RouterModule.forChild(routes),
  ],
  providers: [
    //ProductResolverService,
    ProductsService
  ]
})
export class StoreModule {
}
