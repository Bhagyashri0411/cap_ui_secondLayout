import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CAPService } from 'src/app/Service/cap-service';

@Component({
  selector: 'app-dashbaord-fifth',
  templateUrl: './dashbaord-fifth.component.html',
  styleUrls: ['./dashbaord-fifth.component.scss']
})
export class DashbaordFifthComponent {


  constructor(private service: CAPService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
  ) {
    this.getSiteCyberSecurityData();
  }
  isExpand: boolean = false;

  tableDataOfCyberDevelopementStatus: any[] = [
    { id: 1, development: '2023', solutionName: "3rd Party", statusCode: 'green' },
    { id: 2, development: '', solutionName: "Consulting Services - Assessment", statusCode: 'green' },
    { id: 3, development: '', solutionName: "CSVA", statusCode: 'green' },
    { id: 4, development: '', solutionName: "Remediation", statusCode: 'green' },
    { id: 1, development: '', solutionName: "Netwoerk" },
    { id: 1, development: '', solutionName: "Assessment_Onewireless", statusCode: 'green' },
    { id: 1, development: '', solutionName: "csHAZOP", statusCode: 'green' },
    { id: 1, development: '', solutionName: "PenTest", statusCode: 'green' },
    { id: 1, development: '', solutionName: "PCN Hardening", statusCode: 'green' },
    { id: 1, development: '', solutionName: "DOME", statusCode: 'green' },
    { id: 1, development: '', solutionName: "Cyber Training", statusCode: 'green' },
    { id: 1, development: '', solutionName: "Cyber Insights (CI)", statusCode: 'green' },
    { id: 1, development: '', solutionName: "Cyber Watch (CW)", statusCode: 'green' },
    { id: 1, development: '', solutionName: "Honywell Forge/RM", statusCode: 'green' },
    { id: 1, development: 'Pursing', solutionName: "MISS - AMIR", statusCode: 'yellow' },
    { id: 1, development: 'Pursing', solutionName: "MISS", statusCode: 'yellow' },
    { id: 1, development: '', solutionName: "SMX", statusCode: 'green' },
    { id: 1, development: '', solutionName: "AWL", statusCode: 'green' },
    { id: 1, development: 'Devployed', solutionName: "Backup & Restore", statusCode: 'green' },
    { id: 1, development: '', solutionName: "Nozomi", statusCode: 'green' }

    // Add more data rows as needed
  ];

  tableColumnsOfCyberDevelopementStatus: any[] = [
    { header: 'Development', field: 'development', className: "statusCode" },
    { header: 'Solution Name', field: 'solutionName', className: "nostatus" },
  ];


  // end

  // abandoned solution
  tableDataOfAbandoned: any[] = [
    { id: 1, oppNumber: 'O-215225', opportunityName: "3rd Party", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 2, oppNumber: 'O-166521', opportunityName: "Consulting Services - Assessment", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 3, oppNumber: 'O-166521', opportunityName: "CSVA", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 4, oppNumber: 'O-166521', opportunityName: "Remediation", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Netwoerk", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Assessment_Onewireless", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "csHAZOP", "closeDate": "2024-08-06", "type": "text-center" },
  ];

  tableColumnsOfAbandoned: any[] = [
    { header: 'Opp. Number', field: 'oppNumber', className: 'type' },
    { header: 'Opportunity Name', field: 'opportunityName' },
    { header: 'Close Date', field: 'closeDate', className: 'type' },
  ];

  // End

  // Suggestion Table

  tableDataOfSuggestions: any[] = [
    { no_suggestion: 1, suggestion_label: "SMX", "type": "text-center" },
    { no_suggestion: 2, suggestion_label: "CVCW", "type": "text-center" },
    { no_suggestion: 3, suggestion_label: "PCNH", "type": "text-center" },
    { no_suggestion: 4, suggestion_label: "CAC", "type": "text-center" },
  ];

  tableColumnsOfSuggestions: any[] = [
    { header: 'No.', field: 'no_suggestion', className: 'type' },
    { header: 'Suggestion', field: 'suggestion_label', className: 'type' },
  ];

  // END

  // detect Table

  tableDataOfDetects: any[] = [
    { no_detects: 1, detect: "24/7 Threst Morntoring", "type": "text-center" },
    { no_detects: 2, detect: "Risk Morntoring", "type": "text-center" },
    { no_detects: 3, detect: "Security Log Collection (SEM)", "type": "text-center" },
    { no_detects: 3, detect: "Security Log Collection (SEM)", "type": "text-center" },

  ];

  tableColumnsOfDetects: any[] = [
    { header: 'No.', field: 'no_detects', className: 'type' },
    { header: 'Detect', field: 'detect' },
  ];

  // end


  tableDataOfCyberOnPlan: any[] = [
    { id: 1, oppNumber: 'O-215225', opportunityName: "3rd Party", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 2, oppNumber: 'O-166521', opportunityName: "Consulting Services - Assessment", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 3, oppNumber: 'O-166521', opportunityName: "CSVA", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 4, oppNumber: 'O-166521', opportunityName: "Remediation", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Netwoerk", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Assessment_Onewireless", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "csHAZOP", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "PenTest", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "PCN Hardening", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "DOME", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Cyber Training", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Cyber Insights (CI)", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Cyber Watch (CW)", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-166521', opportunityName: "Honywell Forge/RM", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-185952', opportunityName: "MISS - AMIR", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-155278', opportunityName: "MISS", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-248522', opportunityName: "SMX", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-285225', opportunityName: "AWL", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-441558', opportunityName: "Backup & Restore", "closeDate": "2024-08-06", "type": "text-center" },
    { id: 1, oppNumber: 'O-248555', opportunityName: "Nozomi", "closeDate": "2024-08-06", "type": "text-center" }
  ];
  tableColumnsOfCyberOnPlan: any[] = [
    { header: 'Opp. Number', field: 'oppNumber', className: 'type' },
    { header: 'Opportunity Name', field: 'opportunityName' },
    { header: 'Close Date', field: 'closeDate', className: 'type' },
  ];

  // Emd
  // Site adjustment
  getSiteCyberSecurityData() {
    this.spinner.show()
    this.service.GetMaturitySatusMasterURL().subscribe(
      (response: any) => {
        this.spinner.hide();
        this.tableDataOfSiteAdustment = response;
      },
      (err =>
        this.spinner.hide()
      )
    );
  }
  tableDataOfSiteAdustment: any[] 
    ;
  tableColumnsOfSiteAdustment: any[] = [
    { header: '', field: 'maturitySecurityLabel' },
    { header: '', field: 'maturitySecurityStatusName' },
  ];

  // NIST CSF
  tableDataOfCategories: any[] = [
    { id: 1, categories: 'Govern (GV)', score: 1.7, "type": "bg-yellow" },
    { id: 2, categories: 'Identity (ID)', score: 0.6, "type": "bg-blue" },
    { id: 3, categories: 'Protect (PR)', score: 1.3, "type": "bg-purple" },
    { id: 4, categories: 'Detect (DE)', score: 0.0, "type": "bg-orange" },
    { id: 5, categories: 'Respond (RS)', score: 1.7, "type": "bg-red" },
    { id: 6, categories: 'Recover (RC)', score: 2.7, "type": "bg-green" },

  ];
  tableColumnsOfCategories: any[] = [
    { header: 'NIST CSF 2.0 CATEGORIES', field: 'categories', className: 'type' },
    { header: 'SCORE', field: 'score' },
  ];


  getTopItems(securityList: any[]): any[] {
    const midpoint = Math.ceil(securityList.length / 2);
    return securityList.slice(0, midpoint);
  }

  getBottomItems(securityList: any[]): any[] {
    const midpoint = Math.ceil(securityList.length / 2);
    return securityList.slice(midpoint);
  }

  handleResize() {
    this.isExpand = !this.isExpand
  }



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
      this.messageService.add({  severity: 'success', summary: 'Done!', detail: `${list.maturitySecurityStatusName} updated Successfully`,life: 5000 });
      this.service.sendUpdateDataOfCyberSecurity('done');
      list.edit = false;

    },
    );
  }

  indicators = [
    { class: 'green', name: 'Current Site Status' },
    { class: 'yellow', name: 'PoC/Ongoing Pursuit' },
    { class: 'red', name: 'Gap/Path Forward' }
  ];

}
