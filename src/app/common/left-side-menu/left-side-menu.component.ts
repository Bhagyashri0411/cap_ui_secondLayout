import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {
  @Input() leftSideConfig: any;

  constructor() {
  }
}
