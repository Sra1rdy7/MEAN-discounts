import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDiscountComponent } from './group-discount.component';

describe('GroupDiscountComponent', () => {
  let component: GroupDiscountComponent;
  let fixture: ComponentFixture<GroupDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
