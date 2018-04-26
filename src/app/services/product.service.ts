import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(type: string): Observable<any> {
    return this.http.get(`../../assets/data/${type}.json`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  save(name: string, item: any) {
    const items = localStorage.getItem(name);

    if (items === null) {
      console.log(item);
      localStorage.setItem(name, JSON.stringify([item]));
    } else {
      const newItems = JSON.parse(items);
      newItems.push(item);
      localStorage.setItem(name, JSON.stringify(newItems));
    }
  }

  get(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  remove(name: string, item) {
    const items = JSON.parse(localStorage.getItem(name));

    if (items === null) {
      return;
    }

    console.log(items);
    const newItems = items.filter(clothing => clothing.item.name !== item.item.name);
    console.log(newItems);

    localStorage.setItem(name, JSON.stringify(newItems));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // Figure out how to do ErrorObservable with rxjs 6
    return new Observable();
  }

}
