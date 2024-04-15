import { Component, OnInit, NgModule } from '@angular/core';
import { CAPService } from './Service/cap-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    IsshowPage: boolean = false;

  constructor(private service: CAPService) { }

  ngOnInit(): void {
    this.service.getShowPage().subscribe(() => {
      this.IsshowPage = true;
    });
  }

}
