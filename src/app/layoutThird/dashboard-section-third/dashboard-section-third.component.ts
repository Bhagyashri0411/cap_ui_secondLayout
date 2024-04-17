import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CAPService } from 'src/app/Service/cap-service';

@Component({
  selector: 'app-dashboard-section-third',
  templateUrl: './dashboard-section-third.component.html',
  styleUrls: ['./dashboard-section-third.component.scss']
})
export class DashboardSectionThirdComponent {


  constructor(private service: CAPService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
  ) {
    this.getSiteCyberSecurityData();
  }
  isExpand: boolean = false;
  isExpandChart: boolean = false;
  showDropdown = false;
  selectedPursuitType: string = "NIST";

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  selectItem(item: any) {
    this.selectedPursuitType = item;
    
    this.showDropdown = false;
  }

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
    {
      "subcategory": "Honeywell Forge",
      "year": "2023-09-11",
      "massage": null
    },
    {
      "subcategory": "MSS",
      "year": "2020-03-10",
      "massage": null
    },
    {
      "subcategory": "SMX",
      "year": "2020-01-16",
      "massage": null
    },

    {
      "subcategory": "Cyber Insights/Cyber Watch",
      "year": "2020-01-16",
      "massage": null
    }
  ];

  tableColumnsOfAbandoned: any[] = [
    { header: 'Sub Category', field: 'subcategory' },
    { header: 'Year', field: 'year' },
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

  ];

  tableColumnsOfDetects: any[] = [
    { header: 'No.', field: 'no_detects', className: 'type' },
    { header: 'Detect', field: 'detect' },
  ];

  // end


  tableDataOfCyberOnPlan: any[] = [
    {
      "subcategory": "SMX",
      "year": "2024-08-06",
      "massage": null,
      "oppNumber": "O-404613",
      "salesStages": "3 - Pursuit / Budgetary"
    },
    {
      "subcategory": "3rd Party HW/SW",
      "year": "2025-09-30",
      "massage": null,
      "oppNumber": "O-657089",
      "salesStages": "2 - Opportunity Development"
    },
    {
      "subcategory": "Consulting Services - Assessment",
      "year": "2025-09-30",
      "massage": null,
      "oppNumber": "O-657089",
      "salesStages": "2 - Opportunity Development"
    },
    {
      "subcategory": "Nozomi",
      "year": "2025-09-30",
      "massage": null,
      "oppNumber": "O-657089",
      "salesStages": "2 - Opportunity Development"
    },

    {
      "subcategory": "Software-Experion Backup & Restore (EBR)",
      "year": "2024-08-06",
      "massage": null,
      "oppNumber": "O-404613",
      "salesStages": "3 - Pursuit / Budgetary"
    },
    {
      "subcategory": "Cyber Training",
      "year": "2025-09-30",
      "massage": null,
      "oppNumber": "O-657089",
      "salesStages": "2 - Opportunity Development"
    },
    {
      "subcategory": "MSS",
      "year": "2025-09-30",
      "massage": null,
      "oppNumber": "O-657089",
      "salesStages": "2 - Opportunity Development"
    },
    {
      "subcategory": "Honeywell Forge",
      "year": "2025-09-30",
      "massage": null,
      "oppNumber": "O-657089",
      "salesStages": "2 - Opportunity Development"
    }
  ];
  tableColumnsOfCyberOnPlan: any[] = [
    { header: 'Opp. Number', field: 'oppNumber', className: 'type' },
    { header: 'Sub Category', field: 'subcategory', className: 'type' },

    { header: 'Sales Stage', field: 'salesStages' },
    { header: 'Year', field: 'year', className: 'type' },
  ];

  // Emd
  // Site adjustment
  getSiteCyberSecurityData() {
    this.spinner.show()
    this.service.GetMaturitySatusMasterURL().subscribe(
      (response: any) => {
        this.spinner.hide();
        this.filterData(response);
      },
      (err =>
        this.spinner.hide()
      )
    );
  }

  filterData(data) {
    data.forEach(element => {
      element.tblCapSiteSecurityMaturityMasterSubs = element.tblCapSiteSecurityMaturityMasterSubs.filter(x => x.pursuitType === "NIST");
    });
    this.tableDataOfSiteAdustment = data;
  }

  tableDataOfSiteAdustment: any[]
    ;
  tableColumnsOfSiteAdustment: any[] = [
    { header: '', field: 'maturitySecurityLabel' },
    { header: '', field: 'maturitySecurityStatusName' },
  ];

  // NIST CSF
  tableDataOfCategories: any[] = [
    { id: 1, categories: 'Govern (GV)', score: 1.7, "type": "text-center" },
    { id: 2, categories: 'Identity (ID)', score: 0.6, "type": "text-center" },
    { id: 3, categories: 'Protect (PR)', score: 1.3, "type": "text-center" },
    { id: 4, categories: 'Detect (DE)', score: 0.0, "type": "text-center" },
    { id: 5, categories: 'Respond (RS)', score: 1.7, "type": "text-center" },
    { id: 6, categories: 'Recover (RC)', score: 2.7, "type": "text-center" },

  ];
  tableColumnsOfCategories: any[] = [
    { header: 'NIST CSF 2.0 CATEGORIES', field: 'categories', },
    { header: 'SCORE', field: 'score' , className:'type'},
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
  handleOpenChart() {
    this.isExpandChart = !this.isExpandChart
  }


 

  indicators = [
    { class: 'green', name: 'Current Site Status' },
    { class: 'yellow', name: 'PoC/Ongoing Pursuit' },
    { class: 'red', name: 'Gap/Path Forward' }
  ];


}
