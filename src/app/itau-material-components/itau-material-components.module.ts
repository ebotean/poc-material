import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAutocompleteComponent } from './material-autocomplete/material-autocomplete.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MaterialAutocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  exports: [
    MaterialAutocompleteComponent
  ]
})
export class ItauMaterialComponentsModule { }
