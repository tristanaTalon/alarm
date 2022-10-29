import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectTrigger } from '@angular/material/select';
import { IntemFilterValuesI } from '../../../models/interface/menu/item-filter-values-i';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-item-filter-values',
  templateUrl: './item-filter-values.component.html',
  styleUrls: ['./item-filter-values.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemFilterValuesComponent implements OnInit {
  @Input() itemFilterValues!: IntemFilterValuesI;

  filteredValues!: Array<number | string | Date>;

  valueControl = new FormControl('');

  @ViewChild('selectuwu1') selectuwu1!: ElementRef;

  constructor() {
    this.valueControl.valueChanges.subscribe(
      (value: number | string | Date | null) => {
        if (value) {
          this.filteredValues = this.filter(value);
        } else {
          this.filteredValues = this.itemFilterValues.values.slice();
        }
        // this.orderFilteredValues();
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

  ngOnInit(): void {}

  public remove($event: number | string | Date): void {}

  public openSelectPanel(): void {
    console.log(this.itemFilterValues);
  }
}
