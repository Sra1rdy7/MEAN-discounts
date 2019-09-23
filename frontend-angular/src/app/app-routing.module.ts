import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregisterComponent } from './Components/User/userregister/userregister.component';



const routes: Routes = [
  {path: 'discounts/:id' , component: UserregisterComponent },
  { path: '', redirectTo: 'admin' , pathMatch: 'full'},
  { path: 'admin', loadChildren: () => import(`./Components/Admin/admin.module`).then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
