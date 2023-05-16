import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QueryParamsListing} from "../model/query-params-listing";
import {environment} from "../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  API_URL = environment.apiUrl+"/events";
  constructor(private httpClient: HttpClient) { } // DI

  getEvents(queryParams: any) : Observable<any> {
    // undefined => "undefined"
    Object.keys(queryParams).forEach((key: string) => queryParams[key] === undefined && delete queryParams[key]);
    return this.httpClient
      .get(this.API_URL, {params: queryParams});
  }


}
