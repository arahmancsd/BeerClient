import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Beer } from 'src/app/model/beer.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  dummyverifiedLink = 'https://www.ggs-ltd.com/images/verified.png';
  dummayUnVerifiedLink = 'https://webiconspng.com/wp-content/uploads/2016/12/Not-Verified-Icon-300x300.png';
  dummyImageLink: string = environment.dummyImageLink;
  dummyText: string = environment.dummyText;
  @Input() item: Beer;
  @Output() navigationChanging: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router) { }
  ngOnInit() {
  }
  viewBeer(id: string) {
    this.navigationChanging.emit(id);
    this.router.navigate(['beer', id]);
  }
}
