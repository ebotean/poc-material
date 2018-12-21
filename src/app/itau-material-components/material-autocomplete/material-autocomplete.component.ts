import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'material-autocomplete',
  templateUrl: './material-autocomplete.component.html',
  styleUrls: ['./material-autocomplete.component.css']
})
export class MaterialAutocompleteComponent implements OnInit {

  @Input() form: FormControl;
  @Input() options: Array<string>;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() key: string;

  private filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {

    this.filteredOptions = this.form.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
  }

  private _filter(value: string): string[] {

    const filterValue = (!value) ? '' : value[this.key].toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
