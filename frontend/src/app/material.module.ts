import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule
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
    MatButtonModule
  ]
})
export class MaterialModule { }
