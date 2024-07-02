import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConvertorComponent } from "./convertor.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { AppState } from "../../store/reducers/app.reducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Subject, of } from "rxjs";
import { Store } from "@ngrx/store";
import {
  loadCountries,
  loadCurrencyConversion,
} from "../../store/actions/app.actions";
import {
  mock_Amount,
  mock_countries,
  mock_res,
} from "../../shared/mocks/currency.mock";
import { Component } from "@angular/core";

describe("ConvertorComponent", () => {
  let component: ConvertorComponent;
  let fixture: ComponentFixture<ConvertorComponent>;
  let destroy$: Subject<void>;
  let store: Store<AppState>;
  const initialState: AppState = {
    currency: {
      result: "",
      base_code: "",
      target_code: "",
      time_last_update_utc: "",
      time_next_update_utc: "",
    },
    countries: [],
    loading: false,
    error: null,
  };

  beforeEach(async () => {
    destroy$ = new Subject<void>();

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertorComponent);
    component = fixture.componentInstance;
    component.countries = mock_countries;
    fixture.detectChanges();

    component.destroy$ = destroy$;
    store = TestBed.inject(Store);
  });

  afterEach(() => {
    destroy$.next();
    destroy$.complete();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Initialization", () => {
    it("should set select dropdown on countries loaded", () => {
      const store = TestBed.inject(Store);
      const dispatchSpy = spyOn(store, "dispatch");
      const selectCountriesSpy = spyOn(store, "select");
      selectCountriesSpy.and.returnValue(of(mock_res));
      component.ngOnInit();

      expect(dispatchSpy).toHaveBeenCalledWith(loadCountries());
      expect(component.countries).toEqual(mock_countries);
    });
  });

  describe("Flag manpulation", () => {
    it("should set flagUrl countries loaded", () => {
      const code = "GBP";
      expect(component.getFlagUrl(code)).toBe(
        "https://wise.com/public-resources/assets/flags/rectangle/gbp.png"
      );
    });
  });

  describe("on Submit", () => {
    it("should get required conversion", () => {
      const store = TestBed.inject(Store);
      const dispatchSpy = spyOn(store, "dispatch");
      component.selectedFromCurrency = mock_countries[2];
      component.selectedToCurrency = mock_countries[0];
      component.fromAmount = 1;
      const payload = {
        base: "GBP",
        target: "INR",
        amount: 1,
      };

      component.onSubmit();
      expect(component.converted).toBeTruthy();
      expect(dispatchSpy).toHaveBeenCalledWith(
        loadCurrencyConversion({ currencyReq: payload })
      );
    });
  });
});
