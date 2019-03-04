import {ProductModel} from '../../../models/products.model';

export const ProductActionType = {
  GET_PRODUCTS: '[PRODUCTS] GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: '[PRODUCTS] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAIL: '[PRODUCTS] GET_PRODUCTS_FAIL',

  DELETE_PRODUCTS: '[PRODUCTS] DELETE_PRODUCTS',
  ADD_OR_UPDATE: '[PRODUCTS] ADD_OR_UPDATE',
};


export class LoadProducts {
  static readonly type = ProductActionType.GET_PRODUCTS;

  constructor() {
  }
}

export class LoadProductsSuccess {
  static readonly type = ProductActionType.GET_PRODUCTS_SUCCESS;

  constructor(public payload: Array<ProductModel>) {
  }
}

export class LoadProductsFail {
  static readonly type = ProductActionType.GET_PRODUCTS_FAIL;

  constructor(public payload: { data: any }) {
  }
}

export class DeleteProduct {
  static readonly type = ProductActionType.DELETE_PRODUCTS;

  constructor(public payload: { id: number }) {
  }
}

export class AddOrUpdate {
  static readonly type = ProductActionType.ADD_OR_UPDATE;

  constructor(public payload: ProductModel) {
  }
}




