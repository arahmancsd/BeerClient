import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Result, BeerResult } from '../model/beer.model';


@Injectable({
  providedIn: 'root'
})
export class BeerService {
  rootUrl:string = "https://thingproxy.freeboard.io/fetch/https://sandbox-api.brewerydb.com/v2/";
  constructor(private httpClient: HttpClient) {
  }
  public getBeers(path: string, params: HttpParams, apiKey: string): Observable<Result> {
    const url = this.rootUrl + path.replace('/','') + '/?key=' + apiKey;
    return this.httpClient.get<Result>(url, { params, responseType: 'json' })
      .pipe(catchError(this.handleHttpClientError));
  }
  public getBeer(path: string, id: string, apiKey: string): Observable<BeerResult> {
    const url = this.rootUrl + path.replace('/','') + '/' + id + '/?key=' + apiKey;
    return this.httpClient.get<BeerResult>(url, { responseType: 'json' })
      .pipe(catchError(this.handleHttpClientError));
  }
  private handleHttpClientError(errorResponse: HttpErrorResponse) {
    return throwError(errorResponse);
  }
}
