import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';
import { GroupDiscountComponent } from './group-discount/group-discount.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { CreateGroupDiscountComponent } from './create-group-discount/create-group-discount.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { DiscountRulesComponent } from './discount-rules/discount-rules.component';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';


const routes: Routes = [
  { path: '', component: GroupDiscountComponent },
  { path: 'create', component: CreateGroupDiscountComponent},
  { path: 'discountinfo/:id', component: DiscountDetailsComponent}

];

@NgModule({
  declarations: [GroupDiscountComponent, CreateGroupDiscountComponent, DiscountRulesComponent, DiscountDetailsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
