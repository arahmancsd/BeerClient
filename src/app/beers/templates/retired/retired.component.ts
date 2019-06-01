import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retired',
  templateUrl: './retired.component.html',
  styleUrls: ['./retired.component.css']
})
export class RetiredComponent implements OnInit {

  constructor() { }
  @Input() isRetired: string;
  ngOnInit() {
  }

}
