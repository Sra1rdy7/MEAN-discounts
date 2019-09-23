import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiscountDialogComponent } from './create-discount-dialog.component';

describe('CreateDiscountDialogComponent', () => {
  let component: CreateDiscountDialogComponent;
  let fixture: ComponentFixture<CreateDiscountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiscountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiscountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
