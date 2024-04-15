import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CAPService {
  options: any;
  cookieValue: any;
  userDetails: any;
  TLParams: any;
  actionPlantext: any;
  version: any;
  feedbackLink: any;
  defectLink: any;
  helpFileName: any;

  constructor(
    private http: HttpClient,
  ) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    this.options = { headers };
  }

  private refreshCyberSecurity = new Subject<any>();

  getUpdateCyberSecurityData(): Observable<any> {
    return this.refreshCyberSecurity.asObservable();
  }

  sendUpdateDataOfCyberSecurity(message: any) {
    this.refreshCyberSecurity.next(message);
  }

  private showPage = new Subject<any>();

  getShowPage(): Observable<any> {
    return this.showPage.asObservable();
  }

  setShowPage(message: any) {
    this.showPage.next(message);
  }


  // header api
  GetFCPoleDataURL() {
    const requstProcessorData = {
      app: environment.applicationName,
      action: environment.GetFCPoleData,
      requestType: 'GET'
    };
    return this.http.post(environment.baseUrl + environment.reqProcessorUrl, requstProcessorData).pipe(map(response => response));
  }
  GetRegionDataURL(payload: any) {
    const requstProcessorData = {
      app: environment.applicationName,
      action: environment.GetRegionData,
      data: JSON.stringify(payload),
      requestType: 'POST'
    };
    return this.http.post(environment.baseUrl + environment.reqProcessorUrl, requstProcessorData).pipe(map(response => response));
  }

  GetCountryDataURL(payload: any) {
    const requstProcessorData = {
      app: environment.applicationName,
      action: environment.GetCountryData,
      data: JSON.stringify(payload),
      requestType: 'POST'
    };
    return this.http.post(environment.baseUrl + environment.reqProcessorUrl, requstProcessorData).pipe(map(response => response));
  }

  GetAccountSiteDataURL(payload: any) {
    const requstProcessorData = {
      app: environment.applicationName,
      action: environment.GetAccountSiteData,
      data: JSON.stringify(payload),
      requestType: 'POST'
    };
    return this.http.post(environment.baseUrl + environment.reqProcessorUrl, requstProcessorData).pipe(map(response => response));
  }

  // end

  // get cyber data
  GetMaturitySatusMasterURL() {
    const requstProcessorData = {
      app: environment.applicationName,
      action: environment.GetMaturitySatusMaster,
      requestType: 'GET'
    };
    return this.http.post(environment.baseUrl + environment.reqProcessorUrl, requstProcessorData).pipe(map(response => response));
  }

  SaveMaturitySatusMasterURL(payload: any) {
    const requstProcessorData = {
      app: environment.applicationName,
      action: environment.SaveMaturitySatusMaster,
      data: JSON.stringify(payload),
      requestType: 'POST'
    };
    return this.http.post(environment.baseUrl + environment.reqProcessorUrl, requstProcessorData).pipe(map(response => response));
  }


}


