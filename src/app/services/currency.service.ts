import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CurrencyRequest, CurrencyResponse } from "../models/currency.model";
import { environment } from "../../environments/environment";
import { CountryCodeResponse, CountryList } from "../models/country.model";

@Injectable({
  providedIn: "root",
})
export class CurrencyService {
  private baseUrl: string = environment.baseUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrencyConvertion(
    currencyRequest: CurrencyRequest
  ): Observable<CurrencyResponse> {
    const url = `${this.baseUrl}/${this.apiKey}/pair/${currencyRequest.base}/${
      currencyRequest.target
    }${currencyRequest.amount ? `/${currencyRequest.amount}` : ""}`;
    return this.http.get<CurrencyResponse>(url,this.generateHeaders());
  }

  getCountryList(): Observable<CountryCodeResponse> {
    const url = `${this.baseUrl}/${this.apiKey}`;
      return this.http.get<CountryCodeResponse>(url+"/codes/",this.generateHeaders())
    }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'}),
    };
  }
}
