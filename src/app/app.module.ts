import { ConfirmationService, MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterService, NgxDevsComponentsModule } from 'ngx-devs-components';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from 'primeng/accordion';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DashbaordFifthComponent } from './layout/dashbaord-fifth/dashbaord-fifth.component';
import { CyberChartComponent } from './layout/cyber-chart/cyber-chart.component';
import { CommonTableStructureComponent } from './layout/common-table-structure/common-table-structure.component';
import { CategoriesListComponent } from './layout/categories-list/categories-list.component';
import { HeaderComponent } from './common/header/header.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardSectionComponent } from './layoutSecond/dashboard-section/dashboard-section.component';
import { HeaderMenuComponent } from './common/header-menu/header-menu.component';
import { CommonTableWithScrollComponent } from './layoutSecond/common-table-with-scroll/common-table-with-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbaordFifthComponent,
    CyberChartComponent,
    CommonTableStructureComponent,
    CategoriesListComponent,
    HeaderComponent,
    DashboardSectionComponent,
    HeaderMenuComponent,
    CommonTableWithScrollComponent
  ],
  imports: [
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      primaryColour: '#ffffff',
      secondaryColour: '#ccc',
    }),
    NgApexchartsModule,
    BrowserModule,
    AppRoutingModule,
    NgxDevsComponentsModule,
    TabViewModule,
    PanelModule,
    TooltipModule,
    CalendarModule,
    InputSwitchModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    MessagesModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    AccordionModule,
    ConfirmDialogModule,
    DatePipe,
    OverlayPanelModule,
    AutoCompleteModule,
    InputTextModule,
    InputNumberModule,
    NgxSpinnerModule,
     OrganizationChartModule ,
    ToastrModule.forRoot({ timeOut: 3000, preventDuplicates: true }),

  ],
  providers: [MessageService, ConfirmationService, MasterService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
