import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organic',
  templateUrl: './organic.component.html',
  styleUrls: ['./organic.component.css']
})
export class OrganicComponent implements OnInit {

  constructor() { }
  @Input() isOrganic: string;
  ngOnInit() {
  }

}
