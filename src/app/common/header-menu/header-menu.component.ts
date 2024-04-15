import { Component, HostListener, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CAPService } from 'src/app/Service/cap-service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {


  PoledropValues: any;
  RegiondropValues: any;
  CountrydropValues: any;
  accountSitedropValues: any;

  selectedOptionPole: any = "";
  selectedOptionRegion: any = "";
  selectedOptionCountry: any = "";
  selectedOptionaccountSite: any = "";

  showDropdown: any = { Pole: false, Region: false, Country: false, accountSite: false };
  isLoading: boolean = false;


  constructor(private service: CAPService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
  ) { }

  handleShowPage() {
    // if (this.selectedOptionPole === "") {
    //   this.messageService.add({ severity: 'warn', summary: 'Alert!', detail: "Please select Pole", life: 2000 });
    // }
    // else if (this.selectedOptionRegion === "") {
    //   this.messageService.add({ severity: 'warn', summary: 'Alert!', detail: "Please select Region", life: 2000 });
    // }
    // else if (this.selectedOptionCountry === "") {
    //   this.messageService.add({ severity: 'warn', summary: 'Alert!', detail: "Please select Country", life: 2000 });
    // }
    // else if (this.selectedOptionaccountSite === "") {
    //   this.messageService.add({ severity: 'warn', summary: 'Alert!', detail: "Please select Account Site", life: 2000 });
    // }
    // else {
      this.service.setShowPage("show");
    // }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (event.target && !(event.target as HTMLElement).closest('.search-container')) {
      this.closeAllDropdowns();
    }
  }

  toggleDropdown(type: string) {
    this.showDropdown = { Pole: false, Region: false, Country: false, accountSite: false };
    this.showDropdown[type] = true;
    this.loadData(type);
  }

  selectItem(item: any, type: string) {
    this[`selectedOption${type}`] = item;
    this.closeAllDropdowns();
  }

  filterList(event: Event, type: string) {
    const value = (event.target as HTMLInputElement).value.trim();
    if (!value) {
      this.loadData(type);
    } else {
      this[`${type}dropValues`] = this[`${type}dropValues`].filter((item: any) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  ngOnInit() {
    this.loadData('Pole');
  }

  closeAllDropdowns() {
    this.showDropdown = { Pole: false, Region: false, Country: false, accountSite: false };
  }

  loadData(type: string) {

    let method;
    let payload;
    switch (type) {
      case 'Pole':
        method = 'GetFCPoleDataURL';
        payload = {};
        break;
      case 'Region':
        method = 'GetRegionDataURL';
        payload = { name: this.selectedOptionPole };
        break;
      case 'Country':
        method = 'GetCountryDataURL';
        payload = { name: this.selectedOptionRegion };
        break;
      case 'accountSite':
        method = 'GetAccountSiteDataURL';
        payload = { name: this.selectedOptionCountry };
        break;
      default:
        break;
    }

    if (method) {
      this.isLoading = true;
      this.service[method](payload).subscribe(
        (response: any) => {
          this.isLoading = false;
          if (type === "Pole") {
            this[`${type}dropValues`] = response;
          }
          else {
            this[`${type}dropValues`] = JSON.parse(response.data);
          };
        },
        (error: any) => {
          this.spinner.hide();
          this.messageService.add({ severity: 'error', summary: 'Error!', detail: "Error fetching data", life: 2000 });

          console.error("Error fetching data:", error);
        }
      );
    }
  }
}
