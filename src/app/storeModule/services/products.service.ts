import {throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }


  getProducts() {
    return this.http
      .get<any>('assets/mock-data/products-list.json')
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }
}
