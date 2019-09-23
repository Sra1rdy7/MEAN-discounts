import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupDiscountComponent } from './create-group-discount.component';

describe('CreateGroupDiscountComponent', () => {
  let component: CreateGroupDiscountComponent;
  let fixture: ComponentFixture<CreateGroupDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
