import { TestBed } from "@angular/core/testing";

import { CurrencyService } from "./currency.service";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mock_country_response } from "../shared/mocks/currency.mock";

describe("CurrencyService", () => {
  let service: CurrencyService;
  let httpController: HttpTestingController;

  beforeEach(() => {
   
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(CurrencyService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });



  describe('Get Method',()=>{
    it('should call getCountries and return countrylist', () => {
      service.getCountryList().subscribe((res) => {
        expect(res).toEqual(mock_country_response);
      });
  
      const req = httpController.expectOne({
        method: 'GET',
      });
  
      req.flush(mock_country_response);
    });
  })

});
