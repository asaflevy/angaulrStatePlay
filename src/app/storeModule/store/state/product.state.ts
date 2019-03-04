import {Action, Selector, State, StateContext} from '@ngxs/store';
import * as fromAction from './../actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ProductModel} from '../../../models/products.model';
import {ProductsService} from '../../services/products.service';


export class ProductsStateModel {
  data: ProductModel[];
  loaded: boolean;
  loading: boolean;
}

@State<ProductsStateModel>({
  name: 'productsState',
  defaults: {
    data: [],
    loaded: false,
    loading: false,
  }
})

export class ProductState {
  constructor(private productsSrv: ProductsService) {
  }

  @Selector()
  static getProductsData(state: ProductsStateModel): ProductModel[] {
    return state.data;
  }

  @Selector()
  static getCollectionLoaded(state: ProductsStateModel): boolean {
    return state.loaded;
  }


  @Selector()
  static getItemByIdFn(state: ProductsStateModel) {
    return (id: number) => {
      return state[id];
    };
  }

  @Action(fromAction.LoadProducts)
  loadProducts({dispatch, patchState}: StateContext<ProductsStateModel>) {
    patchState({loading: true});
    return this.productsSrv.getProducts()
      .pipe(
        tap(productsData => {
          return dispatch(new fromAction.LoadProductsSuccess(productsData));
        }),
        catchError(error => of(new fromAction.LoadProductsFail(error)))
      );
  }

  @Action(fromAction.LoadProductsSuccess)
  loadCProductsSuccess({patchState}: StateContext<ProductsStateModel>, action: fromAction.LoadProductsSuccess) {
    patchState({
      data: action.payload,
      loaded: true,
      loading: false
    });
  }


  @Action(fromAction.DeleteProduct)
  deleteProduct(ctx: StateContext<ProductsStateModel>, action: fromAction.DeleteProduct) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      data: state.data.filter(item => item.id !== action.payload.id)
    });
  }

  @Action(fromAction.AddOrUpdate)
  addOrUpdate(ctx: StateContext<ProductsStateModel>, action: fromAction.DeleteProduct) {
    const state = ctx.getState();
    const item = action.payload as ProductModel;
    const arrayOfProductsIds = state.data.map(d => d.id);
    if (item.id > -1) {
      const index = arrayOfProductsIds.indexOf(item.id);
      state.data[index] = item;
    }
    else {
      let newProductId = Math.max(...arrayOfProductsIds);
      state.data.push(Object.assign(item, {id: newProductId++}));
    }
    ctx.setState({
      ...state,
    });
  }


  @Action(fromAction.LoadProductsFail)
  loadCProductsFail({dispatch, patchState}: StateContext<ProductsStateModel>) {
    patchState({loading: false});
  }


}
