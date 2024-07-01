import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { CurrencyRequest, CurrencyResponse } from "../models/currency.model";
import { environment } from "../../environments/environment";
import { Country, CountryList } from "../models/country.model";

@Injectable({
  providedIn: "root",
})
export class CurrencyService {
  private currencybaseUrl: string = environment.conversionbaseUrl;
  private countrybaseUrl= environment.countrybaseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrencyConvertion(
    currencyRequest: CurrencyRequest
  ): Observable<CurrencyResponse> {
    const url = `${this.currencybaseUrl}/${this.apiKey}/pair/${currencyRequest.base}/${
      currencyRequest.target
    }${currencyRequest.amount ? `/${currencyRequest.amount}` : ""}`;
    return this.http.get<CurrencyResponse>(url,this.generateHeaders());
  }

  

  getCountryList(): Observable<CountryList> {
    const url = `${this.currencybaseUrl}/${this.apiKey}`;
      return this.http.get<CountryList>(url+"/codes/",this.generateHeaders())
    }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'}),
    };
  }
}
