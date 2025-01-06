import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAltIdComponent } from './system-alt-id.component';

describe('SystemAltIdComponent', () => {
  let component: SystemAltIdComponent;
  let fixture: ComponentFixture<SystemAltIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemAltIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAltIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
