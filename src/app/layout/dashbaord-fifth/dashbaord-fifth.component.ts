import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbaord-fifth',
  templateUrl: './dashbaord-fifth.component.html',
  styleUrls: ['./dashbaord-fifth.component.scss']
})
export class DashbaordFifthComponent {


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

  // Site adjustment
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

  tableDataOfSiteAdustment: any[] = [{
    "createdBy": "CAP",
    "createdOn": "2024-04-11T10:55:00",
    "deleteStatus": false,
    "maturityLevel": "Fundamental",
    "maturitymasterId": 1,
    "modifiedBy": "CAP",
    "modifiedOn": "2024-04-11T10:55:00",
    "tblCapSiteSecurityMaturityMasterSubs": [{
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT/IT Segmentation",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 1,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "1",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    },
    {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "CSVA Assessment",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 2,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(ID)",
      "pursuitType": "NIST",
      "serialNo": "2",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    },
    {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Procedure & Policy",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 3,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(ID)",
      "pursuitType": "NIST",
      "serialNo": "3",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Governance/Regulation Compliance",
      "maturitySecurityStatusColor": "yellow",
      "maturitySecurityStatusName": "Pursuing",
      "maturitymasterSubId": 4,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(DE)",
      "pursuitType": "NIST",
      "serialNo": "4",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    },
    {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Awareness & Trainingn",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 5,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(ID)",
      "pursuitType": "NIST",
      "serialNo": "5",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Assess Discovery & Inventory",
      "maturitySecurityStatusColor": "yellow",
      "maturitySecurityStatusName": "Pursuing",
      "maturitymasterSubId": 6,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(ID)",
      "pursuitType": "NIST",
      "serialNo": "6",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    },
    {
        "createdBy": null,
        "createdOn": "0001-01-01T00:00:00",
        "deleteStatus": null,
        "maturitySecurityLabel": "Auto. ValMaturitymasterSubIdated Local backup",
        "maturitySecurityStatusColor": "yellow",
        "maturitySecurityStatusName": "Pursuing",
        "maturitymasterSubId": 7,
        "modifiedBy": null,
        "modifiedOn": "0001-01-01T00:00:00",
        "pursuitLabel": "(RC)",
        "pursuitType": "NIST",
        "serialNo": "7",
        "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Antivirus & Patching",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 8,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "8",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Secure Remote Access",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 9,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "9",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT/IT Segmentation",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 10,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC 5.x/TC8.x)",
      "pursuitType": "ISO27001",
      "serialNo": "1",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "CSVA Assessment",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 11,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.8)",
      "pursuitType": "ISO27001",
      "serialNo": "2",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Procedure & Policy",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 12,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC5.36)",
      "pursuitType": "ISO27001",
      "serialNo": "3",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Governance/Regulation Compliance",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 13,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC5.5)",
      "pursuitType": "ISO27001",
      "serialNo": "4",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Awareness & Trainingn",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 14,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PE6.3/TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "5",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Assess Discovery & Inventory",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 15,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "6",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Auto. ValMaturitymasterSubIdated Local backup",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 16,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "7",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Antivirus & Patching",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 17,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "8",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Secure Remote Access",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 18,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "9",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 1
    }
    ]
  },
  {
    "createdBy": "CAP",
    "createdOn": "2024-04-10T17:08:00",
    "deleteStatus": false,
    "maturityLevel": "Recommanded",
    "maturitymasterId": 2,
    "modifiedBy": "CAP",
    "modifiedOn": "2024-04-10T17:08:00",
    "tblCapSiteSecurityMaturityMasterSubs": [{
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "AD Domain",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 19,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "10",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT SIEM",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 20,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.15)",
      "pursuitType": "ISO27001",
      "serialNo": "11",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "PCN Hardening",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 21,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC5.x/TC8.x)",
      "pursuitType": "ISO27001",
      "serialNo": "12",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Application Control",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 22,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.7)",
      "pursuitType": "ISO27001",
      "serialNo": "13",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Compliant Checking(PR)",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 23,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC 5.x)",
      "pursuitType": "ISO27001",
      "serialNo": "14",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Risk Monitoring(DR)",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 24,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC5.x/TC8.x)",
      "pursuitType": "ISO27001",
      "serialNo": "15",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "L3.5 DMZ Layer(PR)",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 25,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.X/OC5.X)",
      "pursuitType": "ISO27001",
      "serialNo": "16",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Proactive 24/7 Threat Monitoring(RS)",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 26,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.15)",
      "pursuitType": "ISO27001",
      "serialNo": "17",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "USB Media Protection(PR)",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 27,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC5.x/PH7.x)",
      "pursuitType": "ISO27001",
      "serialNo": "18",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Vulrability Scanning(DE)",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 28,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.8/OC5.36/PE6.8)",
      "pursuitType": "ISO27001",
      "serialNo": "19",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "AD Domain",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 29,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "10",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT SIEM",
      "maturitySecurityStatusColor": "yellow",
      "maturitySecurityStatusName": "Pursuing",
      "maturitymasterSubId": 30,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(ID)",
      "pursuitType": "NIST",
      "serialNo": "11",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "PCN Hardening",
      "maturitySecurityStatusColor": "yellow",
      "maturitySecurityStatusName": "Pursuing",
      "maturitymasterSubId": 31,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "12",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Application Control",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 32,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "13",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Compliant Checking",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 33,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "14",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Risk Monitoring",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 34,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(DR)",
      "pursuitType": "NIST",
      "serialNo": "15",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "L3.5 DMZ Layer",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 35,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "16",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Proactive 24/7 Threat Monitoring",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 36,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(RS)",
      "pursuitType": "NIST",
      "serialNo": "17",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "USB Media Protection",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 37,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "18",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Vulrability Scanning(DE)",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 38,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(DE)",
      "pursuitType": "NIST",
      "serialNo": "19",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 2
    }
    ]
  }, {
    "createdBy": "CAP",
    "createdOn": "2024-04-10T16:56:00",
    "deleteStatus": false,
    "maturityLevel": "Advanced",
    "maturitymasterId": 3,
    "modifiedBy": "CAP",
    "modifiedOn": "2024-04-10T16:56:00",
    "tblCapSiteSecurityMaturityMasterSubs": [{
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "IR Table Exercise(RC,RS)",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 39,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(OC5.26)",
      "pursuitType": "ISO27001",
      "serialNo": "20",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT SOC",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 40,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.15)",
      "pursuitType": "ISO27001",
      "serialNo": "21",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT PenTest(ID)",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 42,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(TC8.15)",
      "pursuitType": "ISO27001",
      "serialNo": "23",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "IR Table Exercise",
      "maturitySecurityStatusColor": "yellow",
      "maturitySecurityStatusName": "Pursuing",
      "maturitymasterSubId": 43,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(RC,RS)",
      "pursuitType": "NIST",
      "serialNo": "20",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT SOC",
      "maturitySecurityStatusColor": "gray",
      "maturitySecurityStatusName": "Default Status",
      "maturitymasterSubId": 44,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(RC,RS)",
      "pursuitType": "NIST",
      "serialNo": "21",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "Offensive/Defensive Cybersecurity Skills",
      "maturitySecurityStatusColor": "red",
      "maturitySecurityStatusName": "Not deployed",
      "maturitymasterSubId": 45,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(PR)",
      "pursuitType": "NIST",
      "serialNo": "22",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }, {
      "createdBy": null,
      "createdOn": "0001-01-01T00:00:00",
      "deleteStatus": null,
      "maturitySecurityLabel": "OT PenTest",
      "maturitySecurityStatusColor": "green",
      "maturitySecurityStatusName": "Deployed",
      "maturitymasterSubId": 46,
      "modifiedBy": null,
      "modifiedOn": "0001-01-01T00:00:00",
      "pursuitLabel": "(ID)",
      "pursuitType": "NIST",
      "serialNo": "23",
      "tblCapSiteSecurityMaturityMastermaturitymasterId": 3
    }
    ]
  }
  ]
    ;
  tableColumnsOfSiteAdustment: any[] = [
    { header: '', field: 'maturitySecurityLabel' },
    { header: '', field: 'maturitySecurityStatusName' },
  ];


  getTopItems(securityList: any[]): any[] {
    const midpoint = Math.ceil(securityList.length / 2);
    return securityList.slice(0, midpoint);
  }

  getBottomItems(securityList: any[]): any[] {
    const midpoint = Math.ceil(securityList.length / 2);
    return securityList.slice(midpoint);
  }

  constructor() { }

  handleResize() {
    this.isExpand = !this.isExpand
  }
}
