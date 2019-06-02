import { Component, OnInit } from '@angular/core';
import { SortOption, Result, ServerPagination } from 'src/app/model/beer.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BeerService } from 'src/app/services/beer.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.css']
})
export class ListBeersComponent implements OnInit {
  // holds server side pagging configuration with default values of page number 1 and 50 items per page
  // this changes as the data is loaded from the server
  dummyIconLink = 'https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-icon.png';
  tableViewColumns: string[] = ['Icon', 'Name', 'Abv', 'Create Date', 'Status', 'Organic', 'Retired', 'Action'];
  pagination: ServerPagination = { currentPage: 0, itemsPerPage: 0, totalItems: 0 }; // default
  pageNumber = 1;
  isLoader = true; // for looading
  isRecordFound = false;
  layoutView = true;
  httpError?: HttpErrorResponse;

  // hold list of returned beers
  resultSet: Result; // main dataset
  private sortBy: SortOption; // handle sort option
  private searchCategory = 'Name'; // default search category value
  private searchBeer = ''; // search search string
  searchCategoryChanged(searchCategory: string) {
    this.searchCategory = searchCategory;
    if (this.searchBeer !== '') {
      this.filterBeerList();
    }
  }
  searchTermChanged(searchTerm: string) {
    this.searchBeer = searchTerm;
    this.filterBeerList();
  }
  layoutViewChanged(layoutView: boolean) {
    this.layoutView = layoutView;
  }
  sortingChanged(sortBy: SortOption) {
    this.sortBy = sortBy;
    this.filterBeerList();
  }
  constructor(private beerService: BeerService, private helper: HelperService) {
  }

  setInitialStage() {
    this.resultSet = null;
    this.isLoader = true;
    this.isRecordFound = false;
  }
  loadBeers(params: HttpParams): void {
    this.setInitialStage();
    this.beerService.getBeers(params, environment.apiKey).subscribe
      (result => {
        this.resultSet = result as Result;
        if (this.resultSet.data != null) {
          this.helper.setPagging(this.pagination, this.resultSet.totalResults, this.resultSet.numberOfPages, this.pageNumber);
          this.isRecordFound = true;
        } else {
          this.isRecordFound = false;
        }
        this.isLoader = false;
      },
        (err: any) => {
          this.httpError = err;
          this.isLoader = this.isRecordFound = false;
        });
    // remove saved search strings from local storage
    this.helper.removeFromLocalStorage([environment.searchTerm, environment.searchCategory]);
  }
  ngOnInit() {
    // preserve two search fields (search text and category)
    // we can implment the same to preserve all search values for sorting, layoutview and even last page meet.
    this.readPreservedSearchSetting();
    this.loadBeers(this.generateQueryString());
  }
  changePage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.loadBeers(this.generateQueryString());
  }
  generateQueryString(): HttpParams {
    let params = new HttpParams();
    if (this.searchCategory.trim().toLowerCase().length > 0 && this.searchBeer.trim().toLowerCase().length > 0) {
      params = params.set(this.searchCategory.trim().toLowerCase(), this.searchBeer.trim().toLowerCase());
    }
    if (this.pageNumber > 1) {
      params = params.set('p', this.pageNumber.toString());
    }
    if (this.sortBy) {
      params = params.set('order', this.sortBy.columnToSort);
      params = params.set('sort', this.sortBy.sortOrder);
    }
    return params;
  }
  filterBeerList() {
    this.pageNumber = 1;
    this.loadBeers(this.generateQueryString());
  }
  preserveSearchSettings(beerId: string): void {
    this.helper.setLocallStorageItem(environment.searchTerm, this.searchBeer);
    this.helper.setLocallStorageItem(environment.searchCategory, this.searchCategory);
  }
  readPreservedSearchSetting() {
    var savedValue = this.helper.readFromLocalStorage(environment.searchTerm);
    if (savedValue != null)
      this.searchBeer = savedValue;
    var savedValue = this.helper.readFromLocalStorage(environment.searchCategory);
    if (savedValue != null)
      this.searchCategory = savedValue;
  }
}
