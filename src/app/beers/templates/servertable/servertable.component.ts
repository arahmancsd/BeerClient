import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beer, ServerPagination } from 'src/app/model/beer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servertable',
  templateUrl: './servertable.component.html',
  styleUrls: ['./servertable.component.css']
})
export class ServertableComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() columns: string[];
  @Input() beers: Beer[]=[];
  @Input() pagination: ServerPagination = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  @Input() dummyIconLink: string;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }
  changePage(pageNumber: number) {
    this.pageChanged.emit(pageNumber);
  }
  viewBeer(id: string) {
    this.router.navigate(['beer', id]);
  }
}
