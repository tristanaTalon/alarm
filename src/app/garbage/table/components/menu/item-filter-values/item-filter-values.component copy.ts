import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';
import { ENTER } from '@angular/cdk/keycodes';
import { IntemFilterValuesI } from '../../../models/interface/menu/item-filter-values-i';
import { cloneDeepWith, orderBy } from 'lodash';
import { FormControl } from '@angular/forms';

class ItemFilterValuesComponent {
  @Input() itemFilterValues!: IntemFilterValuesI;

  filteredValues!: Array<number | string | Date>;

  separatorKeysCodes: number[] = [ENTER];

  valueControl = new FormControl('');

  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;

  constructor() {
    this.valueControl.valueChanges.subscribe(
      (value: number | string | Date | null) => {
        if (value) {
          this.filteredValues = this.filter(value);
        } else {
          this.filteredValues = this.itemFilterValues.values.slice();
        }
        this.orderFilteredValues();
      }
    );
  }

  private filter(value: number | string | Date): Array<number | string | Date> {
    const filterValue = String(value).toLowerCase();
    return this.itemFilterValues.values.filter(
      (value: number | string | Date) =>
        String(value).toLowerCase().includes(filterValue)
    );
  }

  private orderFilteredValues(): void {
    let objectToOrder = [];
    for (let i = 0; i < this.filteredValues.length; i++) {
      const element = this.filteredValues[i];
      objectToOrder.push({ element });
    }
    objectToOrder = orderBy(objectToOrder, ['element'], ['asc']);
    this.filteredValues = [];
    for (let i = 0; i < objectToOrder.length; i++) {
      const element = objectToOrder[i];
      this.filteredValues.push(element.element);
    }
  }

  public add($event: MatChipInputEvent): void {
    if (
      this.isIncluded($event.value, this.itemFilterValues.values) &&
      !this.isIncluded($event.value, this.itemFilterValues.selecteds)
    ) {
      this.itemFilterValues.selecteds.push($event.value);
      this.itemFilterValues.values = this.slice(
        $event.value,
        this.itemFilterValues.values
      );
    }
    $event.chipInput!.clear();
    this.valueControl.setValue(null);
    this.autocomplete.closePanel();
  }

  private isIncluded(
    value: number | string | Date,
    list: Array<number | string | Date>
  ): boolean {
    for (let i = 0; i < list.length; i++) {
      if (value == list[i]) {
        return true;
      }
    }
    return false;
  }

  private slice(
    value: number | string | Date,
    list: Array<number | string | Date>
  ): Array<number | string | Date> {
    const aux = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (element != value) {
        aux.push(element);
      }
    }
    return aux;
  }

  public openAutocomplete() {
    if (!this.valueControl.value) {
      this.autocomplete.openPanel();
      this.filteredValues = this.itemFilterValues.values.slice();
      this.orderFilteredValues();
    }
  }

  public remove($event: number | string | Date): void {
    // const index = this.itemFilter.filter.values.indexOf($event);
    // if (index >= 0) {
    //   this.itemFilter.filter.values.splice(index, 1);
    // }
  }

  public select($event: MatAutocompleteSelectedEvent): void {
    // this.itemFilter.filter.values.push($event.option.viewValue);
    // this.valueSelectedInput.nativeElement.value = '';
    // this.form.controls['valueSelected'].setValue(null);
  }

  public all() {
    console.log('all');
  }
}
