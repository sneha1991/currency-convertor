import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppReducer } from './app.reducer';

export interface State {
  
}

export const reducers: ActionReducerMap<State> = {
  appReducer:AppReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
