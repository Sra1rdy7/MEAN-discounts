import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupDiscountService } from 'src/app/Services/group-discount.service';
import { User } from 'src/app/helper_models/user.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent implements OnInit {
  university: string;
  signedUpUsers = new MatTableDataSource<User>();

  displayedColumns = ['name', 'email'];
  GROUP_DISCOUNT_ID;

  constructor(private activatedRoute: ActivatedRoute,
              private groupDiscountService: GroupDiscountService) { }

  ngOnInit() {
    this.GROUP_DISCOUNT_ID = this.activatedRoute.snapshot.params.id;
    this.fetchAssociatedUserList(this.GROUP_DISCOUNT_ID);
  }
  public fetchAssociatedUserList = (id) => {
    this.groupDiscountService.getUsersInfo(id).subscribe( async (data: any) => {
     this.signedUpUsers.data = data.userMeta as User[];
     this.university = data.university;
     console.log(data);
    });
  }

}
