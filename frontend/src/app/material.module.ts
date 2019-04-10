import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatRadioModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTabsModule
  } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatTabsModule
  ],providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    // ...
  ]
})
export class MaterialModule { }
