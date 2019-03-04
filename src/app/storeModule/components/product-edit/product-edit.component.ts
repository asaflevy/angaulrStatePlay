import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable, of, Subscription} from 'rxjs';
import {Actions, ofActionSuccessful, Select, Store} from '@ngxs/store';
import * as fromProduct from '../../store';
import {map} from 'rxjs/operators';
import {Product, ProductModel} from '../../../models/products.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cv-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnDestroy, AfterViewInit {

  product$: Observable<ProductModel>;
  id: number;
  productForm: FormGroup;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  async ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      imageUrl: ['']
    });
    this.route.params.forEach((params: Params) => {
      const _id = params['id'];
      if (_id !== undefined || _id !== '-1') {
        this.id = +_id;
        this.product$ = this.store.select((state) => {
          const productData = state.productsState.data.find(d => d.id === this.id);
          this.updateFormData(productData);
          return productData;
        });
      }
    });


  }

  ngAfterViewInit() {

  }

  updateFormData(productData: ProductModel) {
    this.productForm.setValue({
      name: productData.name,
      description: productData.description,
      price: productData.price,
      imageUrl: productData.imageUrl
    });
  }

  submitForm(): void {
    if (this.productForm.invalid) {
      return;
    }
    this.store.dispatch(new fromProduct.AddOrUpdate({
      ...this.productForm.value,
      id: this.id,
      creationDate: new Date(),
    } as ProductModel));

    this.router.navigate(['/']);

  }


  ngOnDestroy() {
  }
}


