import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatLabel, MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {
  MatOption,
  MatSelect,
  MatSelectChange,
  MatSelectTrigger,
} from "@angular/material/select";
import { Country } from "../../models/country.model";
import { DatePipe, KeyValuePipe } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-currency-list",
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    MatSelect,
    MatLabel,
    MatOption,
    KeyValuePipe,
    MatIcon,
    MatSelectTrigger,
    FormsModule,
    DatePipe,
  ],
  templateUrl: "./currency-list.component.html",
  styleUrl: "./currency-list.component.css",
})
export class CurrencyListComponent {
  @Input() label!: string;
  @Input() countries!: Country[];
  @Input() selectedValue!: Country;
  @Output() selectedCurrencyChange = new EventEmitter<Country>();
  searchValue: string = "";

  onCurrencyChange(event: MatSelectChange) {
    this.selectedCurrencyChange.emit(event.value);
  }
}
