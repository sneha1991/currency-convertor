import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrencyListComponent } from "./currency-list.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { mock_countries } from "../../shared/mocks/currency.mock";
import { By } from "@angular/platform-browser";

describe("CurrencyListComponent", () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
