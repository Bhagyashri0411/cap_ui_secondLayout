import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-table-with-scroll',
  templateUrl: './common-table-with-scroll.component.html',
  styleUrls: ['./common-table-with-scroll.component.scss']
})
export class CommonTableWithScrollComponent {
  @Input() tableData: any[];
  @Input() tableColumns: any[];
  @Input() scrollHeight: any;

  constructor(private datePipe: DatePipe) { }
  getYear(year: any) {
    const myDate = new Date(year);
    return this.datePipe.transform(myDate, 'yyyy');
  }
 
}
