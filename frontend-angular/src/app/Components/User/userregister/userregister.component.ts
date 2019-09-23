import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { GroupDiscountService } from '../../../Services/group-discount.service';
import { ActivatedRoute } from '@angular/router';
import { GroupDiscount } from '../../../helper_models/group_discount.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/helper_models/user.model';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {
signUpForm: FormGroup;
  university: string;
  endDate: Date;
  totalUsers: number;
  signUpBtnText: string;
  GROUP_DISCOUNT_ID: string;
  USER_ID: string;


  constructor(private userService: UserService,
              private discountService: GroupDiscountService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpBtnText = 'Sign Up';
    this.GROUP_DISCOUNT_ID = this.activatedRoute.snapshot.params.id;
    this.fetchAssociatedDiscount(this.GROUP_DISCOUNT_ID);
    this.fetchUsers();
    this.signUpForm = new FormGroup({
        fullName: new FormControl(),
        email: new FormControl()
    });


  }
  public fetchUsers = () => {
  this.userService.getUsers().subscribe(userData => {
 });
  }

 public fetchAssociatedDiscount = (id) => {
    this.discountService.getDiscountsById(id).subscribe((groupDiscountData: any) => {
      const {university, endDate, userMeta} = groupDiscountData.existingDiscount as GroupDiscount;
      this.university = university;
      this.endDate = endDate;
      if (userMeta.length > 0) {
        this.totalUsers = userMeta.length;
      }
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    this.signUpForm.controls[controlName].hasError(errorName);
 }

 public createUser = (formValues) => {
   const {fullName, email} = formValues as User;
   this.updateUserInfo(fullName, email);
 }
public updateUserInfo = (fullName, email) => {
   this.userService.addUser(fullName, email, this.GROUP_DISCOUNT_ID).subscribe((userRes: any) => {
    if (userRes) {
      this.signUpBtnText = 'Sign Up Success';
      this.USER_ID = userRes.createdUser._id;
      this.discountService.updateDiscount(String(this.GROUP_DISCOUNT_ID), String(this.USER_ID)).subscribe((discountRes: any) => {
       this.totalUsers = discountRes.userMeta.length;
      });
      console.log(String(this.USER_ID));
    }
  });
 }


}
