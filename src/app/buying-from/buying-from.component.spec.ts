import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingFromComponent } from './buying-from.component';

describe('BuyingFromComponent', () => {
  let component: BuyingFromComponent;
  let fixture: ComponentFixture<BuyingFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyingFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
