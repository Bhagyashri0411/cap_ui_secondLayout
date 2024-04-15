import { Component, Input, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';

import { OverlayPanel } from 'primeng/overlaypanel';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { LayoutService } from './service/app.layout.service';
import { ApiService } from './service/api-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('panel') overlayPanel: OverlayPanel;

  @ViewChild('topbarmenu') menu!: ElementRef;
  businessTitle: any;
  userName: string;

  @Input() userDetails: any;

  constructor(private router: Router,
    public layoutService: LayoutService,
    public apiService: ApiService
  ) { }

  showHeaderSearchModal = false;
  activeIndex = 0;
  infoData: any;
  userDropdown = {
    title: '', titleInitial: 'JD', subtitle: '', id: 'userDropdown', titleStyle: 'color:#201E1E;font-size:12px;font-weight: 400;', subtitleStyle: 'display:block;color:#9F9898;font-size:12px;font-weight: 400;', autoclose: 'outside',
    options: [
      { id: 'accountManagement', title: 'Account management', showDevider: true },
      { id: 'logout', title: 'Logout', showDevider: false, titleStyle: 'color:#D82424;' },
      { id: 'usename', title: 'UserName', showDevider: false, titleStyle: 'color:#D82424;' },

      { id: 'version', title: 'Honeywell', subtitle: '2023.R23.21', titleStyle: 'cursor: auto;', showDevider: false, subtitleStyle: 'color:#9F9898;cursor: auto;' },
    ]
  }
  ngOnInit(): void {

  }

  // constructor(
  //   public service: ApiService,
  //   public leservice: LEService,
  //   public spinner: NgxSpinnerService
  // ) {
  //   this.userName = this.service.userName;
  //   this.businessTitle = this.service.businessTitle;
  // }


  // ngOnInit(): void {

  //   this.leservice.getGuideEACAnalysisAllDataURL().subscribe(
  //     (response: any) => {
  //       this.infoData = response
  //     },
  //     (error: any) => {
  //       console.error('Error from postData:', error);
  //     }
  //   );

  // }


  showSearchModal() {
    this.showHeaderSearchModal = true;

  }

  closedDialog() {
    this.showHeaderSearchModal = false;
  }

  logOut() {
    // this.spinner.show();
    // this.service.logout().subscribe(res => {
    //   this.spinner.hide();
    //   if (res.status === 200) {
    //     window.location.href = res.URL;
    //   } else {

    //   }
    // }, err => {
    //   this.spinner.hide();
    // });
  }

  togglePanel(event: Event) {

    if (this.overlayPanel) {
      this.overlayPanel.toggle(event);

    }
  }


  navigatePage(selectedOption: any): void {
    switch (selectedOption.target.value) {
      case 'page1':
        this.router.navigate(['/dashboard']);
        break;
      case 'page2':
        this.router.navigate(['/dashboard1']);
        break;
      case 'page3':
        this.router.navigate(['/option3']);
        break;
        case 'page4':
        this.router.navigate(['/option4']);
        break;
      default:
        
        break;
    }
  }
}
