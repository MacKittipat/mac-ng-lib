import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacButtonComponent } from './mac-button.component';

describe('MacButtonComponent', () => {
  let component: MacButtonComponent;
  let fixture: ComponentFixture<MacButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
