import { createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';
import { CurrencyResponse } from '../../models/currency.model';
import { Country } from '../../models/country.model';

export interface AppState {
  currency: CurrencyResponse;
  countries: [];
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  currency:{
    result: '',
    base_code: '',
    target_code: '',
    time_last_update_utc: '',
    time_next_update_utc: ''
  },
  countries:[],
  loading: false,
  error: null,
};

export const AppReducer = createReducer(
  initialState,

  on(AppActions.loadCurrencyConversion, (state) => ({ ...state, loading: true })),
  on(AppActions.loadCurrencyConversionSuccess, (state,  {currency} ) => ({
    ...state,
    currency,
    loading: false,
   
  })),
  on(AppActions.loadCurrencyConversionFailure, (state, { errormessage }) => ({
    ...state,
    loading: false,
    errormessage,
  })),


  on(AppActions.loadCountries, (state) => ({ ...state, loading: true })),
  on(AppActions.loadCountriesSuccess, (state,  {countries} ) => ({
    ...state,
    countries,
    loading: false,
   
  })),
  on(AppActions.loadCountriesFailure, (state, { errormessage }) => ({
    ...state,
    loading: false,
    errormessage,
  })),
)
