import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingToComponent } from './selling-to.component';

describe('SellingToComponent', () => {
  let component: SellingToComponent;
  let fixture: ComponentFixture<SellingToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellingToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellingToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
