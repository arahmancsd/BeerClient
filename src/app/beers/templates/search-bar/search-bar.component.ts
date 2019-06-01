import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchCategoryChanged: EventEmitter<string> = new EventEmitter<string>();

  categories: string[] = ['Name', 'Abv'];
  private searchCategory: string = this.categories[0];
  get SearchCategory(): string {
    return this.searchCategory;
  }
  @Input() set SearchCategory(val: string) {
    if (this.searchCategory !== val) {
      this.searchCategory = val;
      this.searchCategoryChanged.emit(val);
    }
  }
  private searchTerm = '';
  get SearchTerm(): string {
    return this.searchTerm;
  }
  @Input() set SearchTerm(val: string) {
    if (this.searchTerm !== val) {
      this.searchTerm = val;
      this.searchTermChanged.emit(val);
    }
  }
  constructor() { }
  ngOnInit() {
  }

}
