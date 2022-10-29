import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
} from '@angular/core';
import { cloneDeepWith, orderBy, uniqBy } from 'lodash';
import { ItemFilterI } from 'src/app/table/models/interface/menu/item-filter-i';
import { OptionI } from 'src/app/table/models/interface/menu/option-i';
import { MetaDataFieldI } from 'src/app/table/models/interface/table/meta-data-field-i';

@Component({
  selector: 'app-option-filter-fast',
  templateUrl: './option-filter-fast.component.html',
  styleUrls: ['./option-filter-fast.component.scss'],
})
export class OptionFilterFastComponent implements OnInit {
  @Input() option!: OptionI;

  @Input() data!: any[];

  clonedOption!: OptionI;

  itemFilters!: ItemFilterI[];

  @Output() changeToAdvancedFilterO: EventEmitter<true> =
    new EventEmitter<true>();

  @Output() changeItemFiltersO: EventEmitter<ItemFilterI[]> = new EventEmitter<
    ItemFilterI[]
  >();

  @Input() itemFiltersCommon!: ItemFilterI[];

  @Input() amountOfChangesFromAdvanced!: number;

  constructor() {
    this.itemFilters = [];
  }

  ngOnInit(): void {
    this.clonedOption = cloneDeepWith(this.option);
    setTimeout(() => {
      this.setInitItemFilters();
    });
  }

  private setInitItemFilters(): void {
    const columns = this.ordered(this.getColumns());
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      this.itemFilters.push({
        index: i,
        itemFilterColumn: { loading: false, columns: [], selected: column },
        itemFilterValues: {
          loading: true,
          values: this.ordered(this.getUniqueValues(column)),
          selecteds: [],
        },
      });
    }
  }

  private getColumns(): string[] {
    const columns: string[] = [];
    for (let i = 0; i < this.option.canvas.fields.length; i++) {
      const field = this.option.canvas.fields[i];
      if (this.isValidField(field)) {
        columns.push(field.alias);
      }
    }
    return columns;
  }

  private isValidField(field: MetaDataFieldI): boolean {
    return field.name != 'DraggedAndDropped' && field.name != 'Selection';
  }

  private getUniqueValues(alias: string): any[] {
    const values: any[] = [];
    const name = this.getNameByAlias(alias);
    const uniqueValues = uniqBy(this.data, name);
    for (let i = 0; i < uniqueValues.length; i++) {
      values.push(uniqueValues[i][name]);
    }
    return values;
  }

  private getNameByAlias(alias: string): string {
    for (let i = 0; i < this.option.canvas.fields.length; i++) {
      const element = this.option.canvas.fields[i];
      if (element.alias == alias) {
        return element.name;
      }
    }
    return '';
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

  public changeToAdvancedFilter(): void {
    this.changeToAdvancedFilterO.emit(true);
  }

  public changedItemFilter(): void {
    this.changeItemFiltersO.emit(this.itemFilters);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (
        changes['itemFiltersCommon'] &&
        changes['amountOfChangesFromAdvanced']
      ) {
        if (!changes['itemFiltersCommon'].firstChange) {
          this.updateItemFiltersByCommonItemFilters();
        }
      }
    }
  }

  private updateItemFiltersByCommonItemFilters(): void {
    for (let i = 0; i < this.itemFilters.length; i++) {
      if (this.isUpdatableByCommonItemFilter(this.itemFilters[i])) {
        this.updateItemFilterByCommonItemFilters(this.itemFilters[i]);
      } else {
        this.itemFilters[i].itemFilterValues.selecteds = [];
      }
    }
    this.itemFilters = cloneDeepWith(this.itemFilters);
  }

  private isUpdatableByCommonItemFilter(itemFilter: ItemFilterI): boolean {
    for (let i = 0; i < this.itemFiltersCommon.length; i++) {
      if (
        itemFilter.itemFilterColumn.selected ==
        this.itemFiltersCommon[i].itemFilterColumn.selected
      ) {
        return true;
      }
    }
    return false;
  }

  private updateItemFilterByCommonItemFilters(itemFilter: ItemFilterI): void {
    for (let i = 0; i < this.itemFiltersCommon.length; i++) {
      if (
        itemFilter.itemFilterColumn.selected ==
        this.itemFiltersCommon[i].itemFilterColumn.selected
      ) {
        itemFilter.itemFilterValues.selecteds =
          this.itemFiltersCommon[i].itemFilterValues.selecteds;
      }
    }
  }

  public show(): void {
    console.log(this);
  }
}
