import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
    MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule, MatExpansionModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDialog} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
       CommonModule,
       MatButtonModule,
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatBadgeModule,
       MatCardModule,
       MatExpansionModule,
       MatListModule,
       MatGridListModule,
       MatFormFieldModule,
       MatInputModule,
       MatSelectModule,
       MatRadioModule,
       MatDatepickerModule,
       MatNativeDateModule,
       MatChipsModule,
       MatTooltipModule,
       MatTableModule,
       MatPaginatorModule,
       MatDialogModule,
       FlexLayoutModule
    ],
    exports: [
       MatButtonModule,
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatBadgeModule,
       MatCardModule,
       MatExpansionModule,
       MatListModule,
       MatGridListModule,
       MatInputModule,
       MatFormFieldModule,
       MatSelectModule,
       MatRadioModule,
       MatDatepickerModule,
       MatChipsModule,
       MatTooltipModule,
       MatTableModule,
       MatPaginatorModule,
       MatDialogModule,
       FlexLayoutModule
    ],
    providers: [
       MatDatepickerModule,
    ]
 })

 export class AngularMaterialModule { }
