import { Component, OnInit } from '@angular/core';
import { GroupDiscount } from 'src/app/helper_models/group_discount.model';
import { GroupDiscountService } from 'src/app/Services/group-discount.service';
import {  MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CreateDiscountDialogComponent } from '../../Dialogs/create-discount-dialog/create-discount-dialog.component';
import { MatTableDataSource } from '@angular/material';
import { Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-group-discount',
  templateUrl: './group-discount.component.html',
  styleUrls: ['./group-discount.component.scss']
})
export class GroupDiscountComponent implements OnInit {

 public existingDiscounts = new MatTableDataSource<GroupDiscount>();

 public groupDiscountLst = 'groupDiscountList';

 status: string;


public displayedColumns = ['university', 'endDate', 'details', 'edit', 'delete', 'linkToShare', 'status'];

  constructor(private groupDiscountService: GroupDiscountService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchAllDiscounts();
  }

  public fetchAllDiscounts = () => {
    return this.groupDiscountService.getDiscounts().subscribe((data: any) => {
     this.existingDiscounts.data = data.discounts as GroupDiscount[];
     console.log(data);
    });
 }

 public editDiscount = (id) => {
   console.log(id);

 }
 public openDialog = () => {
   console.log(this.existingDiscounts.data);
   return this.dialog.open(CreateDiscountDialogComponent, {
    data: 'Discount Rules Info!',
   });
   }

   public deleteDiscount = (id) => {
     this.groupDiscountService.deleteDiscount(id).subscribe(res => {
     this.dialogBox('Discount is deleted!');
     });
   }
   public generateDiscountPage = (id) => {
     console.log(id);
     this.router.navigateByUrl(`discounts/${id}`);
   }
   public redirectToDetails = (id) => {
      this.router.navigate([`discountinfo/${id}`], {relativeTo: this.route});
   }
  public dialogBox = (dataString) => {
    const dialogref = this.dialog.open(CreateDiscountDialogComponent, {
      data: dataString,
      autoFocus: true
    });
    dialogref.afterClosed().subscribe(result => {
       this.fetchAllDiscounts();
    });
  }

}
