import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/app/shared/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpService: HttpService) { }

  public apiList: any;

  fetchConfig() {
    try {
      return new Observable((observer) => {
        this.httpService.httpGet(environment.ngAssetBaseUrl + Constant.configFile, false)
          .subscribe(
            (resp: any) => {
              this.apiList = resp.apis;
              observer.next(resp);
              observer.complete();
            },
            err => observer.error(err)
          );
      });
    } catch (error) {
      throw error;
    }
  }
}
