import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DiscountRulesComponent } from '../discount-rules/discount-rules.component';
import { GroupDiscountService } from 'src/app/Services/group-discount.service';
import { MatDialog } from '@angular/material';
import { CreateDiscountDialogComponent } from '../../Dialogs/create-discount-dialog/create-discount-dialog.component';

@Component({
  selector: 'app-create-group-discount',
  templateUrl: './create-group-discount.component.html',
  styleUrls: ['./create-group-discount.component.scss']
})
export class CreateGroupDiscountComponent implements OnInit {
  public discountForm: FormGroup;
  public minDate: Date = new Date(Date.now());
  public panelOpenState = false;
  public discounts = [];
  public discountValues: FormArray;
  private dialogConfig: object;

  constructor(private location: Location,
              public groupDiscountService: GroupDiscountService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.discounts.length = 1;
    this.discountForm = new FormGroup({
      universityName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
        endDate: new FormControl(new Date())
      });

    this.dialogConfig = {
        height: '200px',
        width: '400px',
        data: 'Group Discount Created successfully',
        disableClose: true
      };
  }

  public hasError = (controlName: string, errorName: string) => {
     this.discountForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

public createDiscount = (formValues: object) => {

console.log(formValues);
if (this.discountForm.valid) {
    this.executeDiscountCreation(formValues);
  }

}

public executeDiscountCreation = (discountFormValue: any) => {
  const {universityName, endDate, discountRules} = discountFormValue;
  const discount: any = {
    university: universityName,
    endDate,
    discountRules: [{discountRules}]
  };

  this.groupDiscountService.addNewGroupDiscount(universityName, endDate, discountRules)
  .subscribe(discountRes => {
    const dialogRef = this.dialog.open(CreateDiscountDialogComponent, this.dialogConfig);

    // we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        this.location.back();
      });

  });
  console.log(discountFormValue);
  console.log(discount);
}

public toggleDiscountRules = () => {
  this.discounts = [...this.discounts, this.discounts.length];
}


}
