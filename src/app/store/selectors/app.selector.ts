import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';

const selectAppState = createFeatureSelector<AppState>('appReducer');

export const selectConvertion = createSelector(
  selectAppState,
  (state) => state.currency
);

export const selectCountries = createSelector(
  selectAppState,
  (state) => state.countries
);

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectAppState,
  (state) => state.error
);
