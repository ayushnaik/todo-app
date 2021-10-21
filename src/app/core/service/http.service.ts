import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  httpGet(url: string, isServerRequest: boolean, params?: any, isParamObj?: boolean) {
    if (isServerRequest) {
      url = environment.serverBaseUrl + url;
    }

    if (params && !isParamObj) {
      url = url + `/${params}`;
    } else if (params && isParamObj) {
      params = new HttpParams({ fromObject: params });
    }
    return this.http.get(url, { params });
  }
}
