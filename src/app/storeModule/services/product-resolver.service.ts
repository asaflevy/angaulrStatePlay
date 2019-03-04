// import {Injectable} from '@angular/core';
// import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
// import {Store} from '@ngxs/store';
// import {Observable} from 'rxjs';
// import {filter, take} from 'rxjs/operators';
// import * as fromState from '../store';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductResolverService implements Resolve<any> {
//   constructor(private store: Store) {
//   }
//
//   resolve(route: ActivatedRouteSnapshot) {
//
//     const _id = route.params['id'];
//     if (_id !== undefined || _id !== '-1') {
//       return this.store.select((state) => {
//         const productData = state.productsState.data.find(d => d.id === +_id);
//         return Observable(productData);
//       });
//
//     }
//   }
//
//   waitForCollectionToLoad(): Observable<boolean> {
//     return this.store.select(fromState.ProductState.getCollectionLoaded).pipe(
//       filter(loaded => loaded),
//       take(1)
//     );
//   }
// }
