import { Component, Input } from '@angular/core';
import { CAPService } from '../Service/cap-service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-site-adjustment-table',
  templateUrl: './site-adjustment-table.component.html',
  styleUrls: ['./site-adjustment-table.component.scss']
})
export class SiteAdjustmentTableComponent {
  constructor(private service: CAPService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService) { }

  @Input() data: any
  @Input() tableData: any[];
  @Input() tableColumns: any[];
  @Input() scrollHeight: any;

  handleEdit(list: any) {
    list.edit = true;
  }

  handleCancelEdit(list: any) {
    list.edit = false;
  }

  handleColorChange(item: any, val: any) {
    item.maturitySecurityStatusName = val.target.value;
    switch (val.target.value) {
      case "Deployed":
        item.maturitySecurityStatusColor = "green";
        break;
      case "Not deployed":
        item.maturitySecurityStatusColor = "red";
        break;
      case "Default Status":
        item.maturitySecurityStatusColor = "gray";
        break;
      case "Pursuing":
        item.maturitySecurityStatusColor = "yellow";
        break;
      default:
        break;
    };
  }

  handleSave(data: any, list: any) {
    this.spinner.show();

    this.service.SaveMaturitySatusMasterURL(data).subscribe(() => {
      this.spinner.hide()
      this.messageService.add({ severity: 'success', summary: 'Done!', detail: `${list.maturitySecurityStatusName} updated Successfully`, life: 5000 });
      this.service.sendUpdateDataOfCyberSecurity('done');
      window.location.reload();
      list.edit = false;

    },
    );
  }
}
