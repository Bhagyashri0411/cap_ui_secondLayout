import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-table-structure',
  templateUrl: './common-table-structure.component.html',
  styleUrls: ['./common-table-structure.component.scss']
})
export class CommonTableStructureComponent {
  @Input() tableData: any[];
  @Input() tableColumns: any[];
  @Input() noOfRows: any;


  constructor() { }
 
}
