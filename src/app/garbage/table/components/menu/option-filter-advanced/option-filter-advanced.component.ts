import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  SimpleChanges,
} from '@angular/core';
import { OptionI } from 'src/app/table/models/interface/menu/option-i';
import { ItemFilterI } from '../../../models/interface/menu/item-filter-i';
import { cloneDeepWith, uniqBy, orderBy } from 'lodash';
import { MetaDataFieldI } from 'src/app/table/models/interface/table/meta-data-field-i';
import { ChangedSelectI } from '../../../models/interface/menu/changed-select-i';

@Component({
  selector: 'app-option-filter-advanced',
  templateUrl: './option-filter-advanced.component.html',
  styleUrls: ['./option-filter-advanced.component.scss'],
})
export class OptionFilterAdvancedComponent implements OnInit {
  @Input() option!: OptionI;

  @Input() data!: any[];

  clonedOption!: OptionI;

  itemFilters!: ItemFilterI[];

  @Output() changeToFastFilterO: EventEmitter<true> = new EventEmitter<true>();

  @Output() changeItemFiltersO: EventEmitter<ItemFilterI[]> = new EventEmitter<
    ItemFilterI[]
  >();

  @Input() itemFiltersCommon!: ItemFilterI[];

  @Input() amountOfChangesFromFast!: number;

  constructor() {
    this.data = [];
    this.itemFilters = [];
  }

  ngOnInit(): void {
    this.clonedOption = cloneDeepWith(this.option);
    this.setInitItemFilters();
  }

  private setInitItemFilters(): void {
    if (this.itemFilters.length) {
    } else {
      this.itemFilters.push(this.defaultItemFilter());
    }
  }

  private defaultItemFilter(): ItemFilterI {
    return {
      index: this.itemFilters.length,
      itemFilterColumn: {
        loading: false,
        columns: this.ordered(this.getColumns()),
        selected: '',
      },
      itemFilterValues: {
        loading: false,
        values: [],
        selecteds: [],
      },
    };
  }

  private getColumns(): string[] {
    const columns: string[] = [];
    for (let i = 0; i < this.option.canvas.fields.length; i++) {
      const field = this.option.canvas.fields[i];
      if (this.isValidField(field) && !this.isSelectedField(field)) {
        columns.push(field.alias);
      }
    }
    return columns;
  }

  private isValidField(field: MetaDataFieldI): boolean {
    return field.name != 'DraggedAndDropped' && field.name != 'Selection';
  }

  private isSelectedField(field: MetaDataFieldI): boolean {
    for (let i = 0; i < this.itemFilters.length; i++) {
      if (this.itemFilters[i].itemFilterColumn.selected == field.alias) {
        return true;
      }
    }
    return false;
  }

  private ordered(stringArray: string[]): string[] {
    const stringArrayObject: any[] = [];
    for (let i = 0; i < stringArray.length; i++) {
      stringArrayObject.push({ alias: stringArray[i] });
    }
    const stringArrayOrdered = orderBy(stringArrayObject, 'alias', 'asc');
    const stringArrayToReturn: string[] = [];
    for (let i = 0; i < stringArrayOrdered.length; i++) {
      stringArrayToReturn.push(stringArrayOrdered[i]['alias']);
    }
    return stringArrayToReturn;
  }

  public addNewFilter(): void {
    this.itemFilters.push(this.defaultItemFilter());
    this.changeItemFiltersO.emit(cloneDeepWith(this.itemFilters));
  }

  public removeAllFilters(): void {
    this.itemFilters = [];
    this.itemFilters.push(this.defaultItemFilter());
    this.changeItemFiltersO.emit(cloneDeepWith(this.itemFilters));
  }

  public removeFilter($event: number): void {
    this.itemFilters = this.removedFilters($event);
    this.changedColumn($event);
    if (this.isTheLastFilter()) {
      this.addNewFilter();
    }
    this.changeItemFiltersO.emit(cloneDeepWith(this.itemFilters));
  }

  private isTheLastFilter(): boolean {
    if (this.itemFilters.length == 0) {
      return true;
    }
    return false;
  }

  private removedFilters(index: number): ItemFilterI[] {
    const itemFilters: ItemFilterI[] = [];
    for (let i = 0; i < this.itemFilters.length; i++) {
      const itemFilter = this.itemFilters[i];
      if (itemFilter.index != index) {
        itemFilters.push(itemFilter);
      }
    }
    return itemFilters;
  }

  public changedColumn($index: number): void {
    this.updateColumns();
    this.setInitSelecteds($index);
    this.setSelecteds($index);
    this.changeItemFiltersO.emit(cloneDeepWith(this.itemFilters));
  }

  private updateColumns(): void {
    for (let i = 0; i < this.itemFilters.length; i++) {
      const columns = this.getColumns();
      const itemFilter = this.itemFilters[i];
      if (itemFilter.itemFilterColumn.selected) {
        columns.push(itemFilter.itemFilterColumn.selected);
      }
      itemFilter.itemFilterColumn.columns = this.ordered(columns);
    }
  }

  private setInitSelecteds($index: number): void {
    for (let i = 0; i < this.itemFilters.length; i++) {
      const element = this.itemFilters[i];
      if (element.index == $index) {
        element.itemFilterValues.selecteds = [];
      }
    }
  }

  private setSelecteds($index: number) {
    for (let i = 0; i < this.itemFilters.length; i++) {
      const itemFilter = this.itemFilters[i];
      if (itemFilter.index == $index) {
        itemFilter.itemFilterValues.values = this.ordered(
          this.getUniqueValues($index)
        );
      }
    }
  }

  private getUniqueValues($index: number): any[] {
    const values: any[] = [];
    const name = this.getNameByIndex($index);
    const uniqueValues = uniqBy(this.data, name);
    for (let i = 0; i < uniqueValues.length; i++) {
      values.push(uniqueValues[i][name]);
    }
    return values;
  }

  private getNameByIndex($index: number): string {
    const alias = this.getAliasByIndex($index);
    for (let i = 0; i < this.option.canvas.fields.length; i++) {
      const element = this.option.canvas.fields[i];
      if (element.alias == alias) {
        return element.name;
      }
    }
    return '';
  }

  private getAliasByIndex(index: number): string {
    for (let i = 0; i < this.itemFilters.length; i++) {
      const itemFilter = this.itemFilters[i];
      if (itemFilter.index == index) {
        return itemFilter.itemFilterColumn.selected;
      }
    }
    return '';
  }

  public changedValues($event: true) {
    this.changeItemFiltersO.emit(cloneDeepWith(this.itemFilters));
  }

  public changeToFastFilter(): void {
    this.changeToFastFilterO.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['amountOfChangesFromFast']) {
        if (!changes['amountOfChangesFromFast'].firstChange) {
          this.updateItemFiltersByCommonItemFilter();
          // console.log("uwuuwuwuwu")
        }
      }
    }
  }

  private updateItemFiltersByCommonItemFilter(): void {
    // console.log(this.hasSelectedValuesItemFilterCommon());
    if (this.hasSelectedValuesItemFilterCommon()) {
      this.itemFilters = cloneDeepWith(
        this.justSelectedValuesOfItemFiltersCommon()
      );
      this.updateColumns();
    } else {
      this.itemFilters = [];
      this.setInitItemFilters();
    }
  }

  private hasSelectedValuesItemFilterCommon(): boolean {
    for (let i = 0; i < this.itemFiltersCommon.length; i++) {
      if (this.itemFiltersCommon[i].itemFilterValues.selecteds.length != 0) {
        return true;
      }
    }
    return false;
  }

  private justSelectedValuesOfItemFiltersCommon(): ItemFilterI[] {
    const selectedValues: ItemFilterI[] = [];
    const lastIndex: number = this.lastIndex() + 1;
    for (let i = 0; i < this.itemFiltersCommon.length; i++) {
      const element = this.itemFiltersCommon[i];
      if (element.itemFilterValues.selecteds.length != 0) {
        element.index = lastIndex + i;
        selectedValues.push(element);
      }
    }
    this.updateColumns();
    return selectedValues;
  }

  private lastIndex(): number {
    let lastIndex: number = 0;
    for (let i = 0; i < this.itemFilters.length; i++) {
      if (lastIndex < this.itemFilters[i].index) {
        lastIndex = this.itemFilters[i].index;
      }
    }
    return lastIndex;
  }

  public show(): void {
    // const xd = this.defaultItemFilter();
    // xd.itemFilterColumn.selected = 'Code';
    // xd.itemFilterValues.selecteds = ['1', '2'];
    // xd.itemFilterValues.values = ['1', '2', '3'];

    // this.itemFilters = [xd];
    // console.log(this.justSelectedValuesOfItemFiltersCommon());
    console.log(this);
  }
}
