import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import * as fromProducts from '../../store';
import {Observable} from 'rxjs';
import {ProductModel} from '../../../models/products.model';


@Component({
  selector: 'cv-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Select(fromProducts.ProductState.getProductsData) productsData$: Observable<ProductModel[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new fromProducts.LoadProducts());
  }

}
