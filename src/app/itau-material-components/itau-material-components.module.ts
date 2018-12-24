import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAutocompleteComponent } from './material-autocomplete/material-autocomplete.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItauSearchBarComponent } from './itau-search-bar/itau-search-bar.component';

@NgModule({
  declarations: [
    MaterialAutocompleteComponent,
    ItauSearchBarComponent
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
    MaterialAutocompleteComponent,
    ItauSearchBarComponent
  ]
})
export class ItauMaterialComponentsModule { }
