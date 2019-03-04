import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../../models/products.model';
import {Store} from '@ngxs/store';
import * as fromProduct from '../../store/';

@Component({
  selector: 'cv-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productItem: ProductModel;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }


  deleteItem(id: number) {

    this.store.dispatch(new fromProduct.DeleteProduct({id}));
  }

}
