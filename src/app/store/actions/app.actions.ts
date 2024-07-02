import { createAction, props } from '@ngrx/store';
import {  CurrencyRequest, CurrencyResponse } from '../../models/currency.model';
import { CountryCodeResponse, CountryList } from '../../models/country.model';



export const LOAD_CURRENCIES = '[currency] load currencies';
export const LOAD_CURRENCIES_SUCCESS = '[currency] load currencies success';
export const LOAD_CURRENCIES_FAILURE = '[currency] load currencies failure';


export const LOAD_COUNTRIES = '[country] load countries';
export const LOAD_COUNTRIES_SUCCESS = '[country] load countries success';
export const LOAD_COUNTRIES_FAILURE = '[country] load countries failure';


export const loadCurrencyConversion = createAction(
  LOAD_CURRENCIES,
  props<{ currencyReq: CurrencyRequest}>()
  );
export const loadCurrencyConversionSuccess = createAction(
  LOAD_CURRENCIES_SUCCESS,
  props<{ currency: CurrencyResponse}>()
);
export const loadCurrencyConversionFailure = createAction(
  LOAD_CURRENCIES_FAILURE,
  props<{ errormessage: string }>()
);


export const loadCountries = createAction(LOAD_COUNTRIES);
export const loadCountriesSuccess = createAction(
  LOAD_COUNTRIES_SUCCESS,
  props<{ countries: CountryList }>()
);
export const loadCountriesFailure = createAction(
  LOAD_COUNTRIES_FAILURE,
  props<{ errormessage: string }>()
);