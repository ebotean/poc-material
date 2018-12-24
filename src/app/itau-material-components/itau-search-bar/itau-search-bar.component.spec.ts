import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItauSearchBarComponent } from './itau-search-bar.component';

describe('ItauSearchBarComponent', () => {
  let component: ItauSearchBarComponent;
  let fixture: ComponentFixture<ItauSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItauSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItauSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
