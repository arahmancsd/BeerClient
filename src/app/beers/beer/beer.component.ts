import { Component, OnInit } from '@angular/core';
import { Result, Beer, BeerResult } from 'src/app/model/beer.model';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  listingUrlPath = 'beers';
  singleUrlPath = 'beer';
  dummyLargeImageLink: string = environment.dummyLargeImageLink;
  beerID: string;
  singleBeer: Beer;
  httpError: HttpErrorResponse;
  randomSectionhttpError: HttpErrorResponse;
  // load similiar beers
  randomBeerResultSet: Result;
  constructor(private route: ActivatedRoute, private beerService: BeerService, private router: Router) {

  }

  ngOnInit() {
    this.loadBeer();
  }
  loadBeer() {
    this.route.paramMap.subscribe(params => {
      this.beerID = params.get('id');
      this.singleBeer = null;
      this.beerService.getBeer(this.singleUrlPath, this.beerID, environment.apiKey).subscribe(
        (result: BeerResult) => {
          if (result.data != null) {
            this.singleBeer = result.data;
          }
        },
        (err: any) => {
          this.httpError = err;
        }
      );
      this.loadRandomBeers();
    });
  }

  // picking 9 random beers to give the user to pick products
  loadRandomBeers(): void {
    this.randomBeerResultSet = null;
    const params = new HttpParams()
      .set('randomCount', '9') // manually get 9 beers
      .set('order', 'random');

    this.beerService.getBeers(this.listingUrlPath, params, environment.apiKey).subscribe
      (result => {
        this.randomBeerResultSet = result as Result;
      },
        (err: any) => {
          this.randomSectionhttpError = err;
        });
  }
}
