import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Result, Beer } from '../model/beer.model';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })
export class BeerService {
  url: string;
    constructor(private httpClient: HttpClient) {
    }
    public getBeers(params: HttpParams): Observable<Result> {
        this.url = environment.corsEnabledUrl + '/?key=' + environment.apiKey;
        return this.httpClient.get<Result>(this.url, { params, responseType: 'json' })
            .pipe(catchError(this.handleHttpClientError));
    }
    public getBeer(id: string): Observable<Beer> {
        this.url = environment.urlSingleBeer + id + '?key=' + environment.apiKey;
        return this.httpClient.get<Beer>(this.url, { responseType: 'json' })
            .pipe(catchError(this.handleHttpClientError));
    }
    private handleHttpClientError(errorResponse: HttpErrorResponse) {
        return throwError(errorResponse);
    }
}
