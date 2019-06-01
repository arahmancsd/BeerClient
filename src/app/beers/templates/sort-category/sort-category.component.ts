import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SortOption } from 'src/app/model/beer.model';

@Component({
  selector: 'app-sort-category',
  templateUrl: './sort-category.component.html',
  styleUrls: ['./sort-category.component.css']
})
export class SortCategoryComponent implements OnInit {
// sort by columns
sortColumns: SortOption[] = [
  { id: 1, text: 'Name: A to Z', sortOrder: 'asc', columnToSort: 'name' },
  { id: 2, text: 'Name: Z to A', sortOrder: 'desc', columnToSort: 'name' },
  { id: 3, text: 'Abv: A to Z', sortOrder: 'asc', columnToSort: 'abv' },
  { id: 4, text: 'Abv: Z to A', sortOrder: 'desc', columnToSort: 'abv' },
  { id: 5, text: 'Date: A to Z', sortOrder: 'asc', columnToSort: 'createDate' },
  { id: 6, text: 'Date: Z to A', sortOrder: 'desc', columnToSort: 'createDate' },
  { id: 7, text: 'status: A to Z', sortOrder: 'asc', columnToSort: 'status' },
  { id: 8, text: 'status: Z to A', sortOrder: 'desc', columnToSort: 'status' },
];

private sortBy: SortOption = this.sortColumns[0];
get SortBy(): SortOption {
  return this.sortBy;
}
set SortBy(val: SortOption) {
  this.sortBy = val;
  this.sortingChanged.emit(val);
}

@Output() sortingChanged: EventEmitter<SortOption> = new EventEmitter<SortOption>();
constructor() { }

  ngOnInit() {
  }

}
