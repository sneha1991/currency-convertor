import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AppReducer } from './app.reducer';

export interface State {
  
}

export const reducers: ActionReducerMap<State> = {
  appReducer:AppReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
