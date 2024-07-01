import { Component, OnDestroy, OnInit } from "@angular/core";
import { CurrencyListComponent } from "../currency-list/currency-list.component";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import {
  loadCountries,
  loadCurrencyConversion,
} from "../../store/actions/app.actions";
import { Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";
import { AppState } from "../../store/reducers/app.reducer";
import {
  selectLoading,
  selectError,
  selectCountries,
  selectConvertion,
} from "../../store/selectors/app.selector";
import { Country } from "../../models/country.model";
import { MatButton } from "@angular/material/button";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
} from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { CurrencyRequest, CurrencyResponse } from "../../models/currency.model";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { getCurrencySymbol } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-convertor",
  standalone: true,
  imports: [
    CurrencyListComponent,
    MatCard,
    MatIcon,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardFooter,
    MatButton,
    MatLabel,
    MatInput,
    MatFormField,
    CurrencyPipe,
    MatPrefix,
    FormsModule,
    CommonModule,
  ],
  templateUrl: "./convertor.component.html",
  styleUrl: "./convertor.component.css",
})
export class ConvertorComponent implements OnInit, OnDestroy {
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  destroy$ = new Subject<void>();
  countries: Country[] = [];
  fromCountries: Country[] = [];
  toCountries: Country[] = [];
  selectedFromCurrency!: Country;
  selectedToCurrency!: Country;
  fromAmount!: number;
  toAmount!: CurrencyResponse;
  flag: string | undefined;
  converted: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
    this.store
      .select(selectCountries)
      .pipe(takeUntil(this.destroy$))
      .subscribe((_countries: []) => {
        this.countries = _countries.map((res) => ({
          code: res[0],
          name: res[1],
          flagUrl: this.getFlagUrl(res[0]),
        }));
        this.selectedFromCurrency = this.countries[0];
        this.selectedToCurrency = this.countries[1];
        this.filterDropDown();
        this.generateConversionRequent();
      });

    this.store
      .select(selectConvertion)
      .pipe(takeUntil(this.destroy$))
      .subscribe((_currency: CurrencyResponse) => {
        this.toAmount = _currency;
      });

    this.fromAmount = 1;

    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  getFlagUrl(code: string): string {
    return `https://wise.com/public-resources/assets/flags/rectangle/${code.toLowerCase()}.png`;
  }

  onSubmit(): void {
    this.converted = true;
    this.generateConversionRequent();
  }

  generateConversionRequent(): void {
    if (this.selectedFromCurrency) {
      const payload: CurrencyRequest = {
        base: this.selectedFromCurrency.code,
        target: this.selectedToCurrency.code,
        amount: this.fromAmount,
      };
      this.store.dispatch(loadCurrencyConversion({ currencyReq: payload }));
    }
  }

  filterDropDown(): void {
    this.fromCountries = this.countries.filter(
      (cnt) => cnt.code !== this.selectedToCurrency.code
    );
    this.toCountries = this.countries.filter(
      (cnt) => cnt.code !== this.selectedFromCurrency.code
    );
  }

  onFromCurrencyChange(event: any): void {
    this.fromAmount = 1;
    if (event) {
      this.selectedFromCurrency = event;
      this.toCountries = this.countries.filter(
        (cnt) => cnt.code !== event.code
      );
      this.generateConversionRequent();
    }
  }

  onToCurrencyChange(event: any): void {
    this.fromAmount = 1;
    if (event) {
      this.selectedToCurrency = event;
      this.fromCountries = this.countries.filter(
        (cnt) => cnt.code !== event?.code
      );
      this.generateConversionRequent();
    }
  }

  getCurrencySymbol(selectedFromCurrency: Country): string {
    return getCurrencySymbol(selectedFromCurrency?.code, "narrow");
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
