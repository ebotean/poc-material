import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialSelectedComponentsModule } from './angular-material-selected-components/angular-material-selected-components.module'
import { ItauMaterialComponentsModule } from './itau-material-components/itau-material-components.module';

import { AppComponent } from './app.component';
import { MaterialInputComponent } from './material-input/material-input.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialSelectedComponentsModule,
    ItauMaterialComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
