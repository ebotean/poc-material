import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  exports: [
  	MatInputModule,
  	MatButtonModule, 
  	MatCheckboxModule,
  	MatAutocompleteModule,
  	MatFormFieldModule,
  ]
})
export class AngularMaterialSelectedComponentsModule { }
