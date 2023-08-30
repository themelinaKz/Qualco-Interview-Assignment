import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../app-api";
import { Country } from "./country";
import { CountryLanguage } from "./country-language/country-language";
import { CountryWithStats } from "./countryWithStats";

const URL = API + 'countries';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient){}

    public getAllCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(URL);
    }

    public getAllCountriesWithStats() : Observable<CountryWithStats[]> {
        return this.http.get<CountryWithStats[]>(URL + '/withStats');
    }

    public getAllLanguagesOfACountry(countryId: number): Observable<CountryLanguage[]> {
        if (isNaN(countryId)) {
            throw new Error('CountryService: getAllLanguagesOfACountry: countryId parameter is missing');
        }
        const requestParams = new HttpParams().set('countryId', countryId);
        return this.http.get<CountryLanguage[]>(URL + '/languages',
        {
            params: requestParams
        })
    }
}