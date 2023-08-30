import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../app-api";
import { Region } from "./region";

const URL = API + 'regions';

@Injectable()
export class RegionService {
    constructor(private http: HttpClient) {}

    public getAllRegions(): Observable<Region[]> {
        return this.http.get<Region[]>(URL);
    }
}