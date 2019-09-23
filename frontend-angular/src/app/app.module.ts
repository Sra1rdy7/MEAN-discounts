import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Services/user.service';
import { UserregisterComponent } from './Components/User/userregister/userregister.component';
import { AngularMaterialModule } from './angular-material.module';
import { CreateDiscountDialogComponent } from './Components/Dialogs/create-discount-dialog/create-discount-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    CreateDiscountDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ],
    entryComponents: [CreateDiscountDialogComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
