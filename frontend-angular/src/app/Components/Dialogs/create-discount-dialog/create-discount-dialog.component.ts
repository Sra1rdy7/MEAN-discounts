import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-discount-dialog',
  templateUrl: './create-discount-dialog.component.html',
  styleUrls: ['./create-discount-dialog.component.scss']
})
export class CreateDiscountDialogComponent  {
  title: string;


  constructor(public dialogRef: MatDialogRef<CreateDiscountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public info: [] ) { }

}
