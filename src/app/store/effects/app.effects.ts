import { Injectable, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as AppActions from "../actions/app.actions";
import { CurrencyService } from "../../services/currency.service";
import { CurrencyResponse } from "../../models/currency.model";
import { CountryList } from "../../models/country.model";

@Injectable()
export class AppEffects {
  snackBar = inject(MatSnackBar);
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadCountries),
      switchMap(() =>
        this.currencyService.getCountryList().pipe(
          map((response: CountryList) => {
            return AppActions.loadCountriesSuccess({
              countries: response.supported_codes,
            });
          }),

          catchError((errormessage) =>
            of(AppActions.loadCountriesFailure({ errormessage }))
          )
        )
      )
    )
  );

  updateCurrencyConversion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadCurrencyConversion),
      switchMap((action) =>
        this.currencyService.getCurrencyConvertion(action.currencyReq).pipe(
          map((response: CurrencyResponse) =>
            AppActions.loadCurrencyConversionSuccess({ currency: response })
          ),
          catchError((error) =>
            of(AppActions.loadCurrencyConversionFailure(error))
          )
        )
      )
    )
  );

  showFailureSnackBar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AppActions.loadCountriesFailure,
          AppActions.loadCurrencyConversionFailure
        ),
        switchMap(() =>
          of(
            this.snackBar.open("Something Went Wrong!!!", "", {
              duration: 3000,
              panelClass: ["mat-failure"],
            })
          )
        )
      ),
    { dispatch: false }
  );
}
