import { HttpClient, HttpParams } from "@angular/common/http";
import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../app-api";
import { ContinentInfo } from "./contrinent-info";

const URL = API + 'continents';

@Injectable()
export class ContinentService {

    constructor(private http: HttpClient) {}

    public getAllContinentsInfo(params?: {
        regionName?: string;
        fromYear?: number;
        toYear?: number;
    }): Observable<ContinentInfo[]> {
        let requestParams = new HttpParams();
        if (params) {
            if (params.regionName) {
                requestParams = requestParams.append('regionName', params.regionName);
            }
            if (params.fromYear) {
                requestParams = requestParams.append('fromYear', params.fromYear.toString());
            }
            if (params.toYear) {
                requestParams = requestParams.append('toYear', params.toYear.toString());
            }
        }
        return this.http.get<ContinentInfo[]>(URL + '/info', {
            params: requestParams
        });
    }
}