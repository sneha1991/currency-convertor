import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('UI testing', () => {
    it('should have a ToolBar Text in Footer', () => {
      const text =" Netwealth Investments Limited (“Netwealth”) is authorised and regulated by the Financial Conduct Authority, with firm reference no. 706988. Registered in England and Wales, with company no. 09493628 and with registered offices at Two Fitzroy Place, 8 Mortimer Street, London, W1T 3JJ. "
      const h1 = fixture.debugElement.query(By.css('p'));
      expect(h1.nativeElement.textContent).toEqual(text);
    });
  });
});
