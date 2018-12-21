import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  autocompleteFormControl = new FormControl();
  autocompleteOptions = ['Try this', 'Or this', 'Maybe that'];

  sampleForm = this.fb.group({
    lifeChoice: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.sampleForm.value);
  }
  
  updateValue(event) {
    console.log(event);
  }

}
