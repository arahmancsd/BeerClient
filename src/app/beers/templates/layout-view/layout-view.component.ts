import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: ['./layout-view.component.css']
})
export class LayoutViewComponent implements OnInit {

  constructor() { }
  viewModes: string[] = ['Grid', 'Tabular'];
  private viewMode = 'Grid';
  get ViewMode(): string {
    return this.viewMode;
  }
  set ViewMode(val: string) {
    this.viewMode = val;
    this.layoutViewChanged.emit((val.toLowerCase() === 'grid') ? true : false);
  }
  @Output() layoutViewChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {
  }

}
