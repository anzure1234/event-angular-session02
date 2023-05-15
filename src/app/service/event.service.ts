import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QueryParamsListing} from "../model/query-params-listing";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { } // DI

  getEvents(queryParams: any) : Observable<any> {
    // undefined => "undefined"
    Object.keys(queryParams).forEach((key: string) => queryParams[key] === undefined && delete queryParams[key]);
    return this.httpClient
      .get(`http://localhost:8888/api/events`, {params: queryParams});
  }


}
