import { Component, OnInit } from '@angular/core';
import { TablePackI } from '../../models/interface/table-pack-i';
import { getTablePack } from '../../models/data-mock/table-pack-mock';
import { getDataSource } from '../../models/data-mock/table/table-mock';
import { OrderI } from '../../models/interface/table/order-i';
import { orderBy } from 'lodash';
import { cloneDeepWith } from 'lodash';
import { ItemFilterI } from '../../models/interface/menu/item-filter-i';
import { OptionFilterAnswerI } from '../../models/interface/menu/option-filter-answer-i';

@Component({
  selector: 'app-page-example',
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.scss'],
})
export class PageExampleComponent implements OnInit {
  tablePack!: TablePackI;

  data: any[];

  triggerUpdateTable!: number;

  timeLoad!: number;

  checkedRows!: any[];

  tablePackCloned!: TablePackI;

  triggerRemoveSelections!: number;

  triggerOptionOrder!: number;

  lastTaskRequested!: 'order' | 'paginator' | 'search' | '' | 'hide';

  constructor() {
    this.tablePack = getTablePack();
    this.data = [];
    this.tablePack.table.isLoading = true;
    this.triggerUpdateTable = 0;
    this.timeLoad = 0;
    this.checkedRows = [];
    this.tablePackCloned = cloneDeepWith(this.tablePack);
    this.triggerRemoveSelections = 0;
    this.triggerOptionOrder = 0;
    this.lastTaskRequested = '';
  }

  ngOnInit(): void {
    this.loadInitData();
  }

  private loadInitData(): void {
    const route = 'this.getRoutePageEvent();';
    setTimeout(() => {
      this.data = getDataSource();
      this.tablePack.table.isLoading = false;
      this.tablePack.paginator.length = this.data.length;
      this.getDataByPage();
      this.triggerUpdateTable += 1;
    }, this.timeLoad);
  }

  private getDataByPage(): void {
    const pageIndex = this.tablePack.paginator.pageIndex;
    const pageSize = this.tablePack.paginator.pageSize;
    this.tablePack.table.dataSource = [
      ...this.data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    ];
  }

  public sortEvent() {
    this.lastTaskRequested = 'order';
    this.mngDataSource();
    this.triggerOptionOrder += 1;
  }

  public pageEvent($event: any) {
    this.lastTaskRequested = 'paginator';
    this.mngDataSource();
  }

  private mngDataSource(): void {
    this.orderDataSource();
    this.filterDataSource();
    if (this.lastTaskRequested == 'search') {
      this.tablePack.paginator.pageIndex = 0;
    }
    this.getDataByPage();
    this.triggerUpdateTable += 1;
  }

  private orderDataSource(): void {
    this.data = getDataSource();
    if (this.isOrdenable()) {
      this.data = orderBy(this.data, this.getActiveds(), this.getDirections());
    }
  }

  private isOrdenable(): boolean {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      if (this.tablePack.table.metaDataFields[i].direction) {
        return true;
      }
    }
    return false;
  }

  private getActiveds(): string[] {
    const activeds: string[] = [];
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const element = this.tablePack.table.metaDataFields[i];
      if (element.direction) {
        activeds.push(element.name);
      }
    }
    return activeds;
  }

  private getDirections(): Array<'asc' | 'desc'> {
    const directions: Array<'asc' | 'desc'> = [];
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const element = this.tablePack.table.metaDataFields[i];
      if (element.direction) {
        directions.push(element.direction);
      }
    }
    return directions;
  }

  private filterDataSource(): void {
    if (this.isFilterable()) {
      const filteredData = [];
      for (let i = 0; i < this.data.length; i++) {
        const element = this.data[i];
        if (this.isFilterableElement(element)) {
          filteredData.push(element);
        }
      }
      this.data = filteredData;
      this.tablePack.paginator.length = this.data.length;
    } else {
      this.tablePack.paginator.length = this.data.length;
    }
  }

  private isFilterable(): boolean {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const field = this.tablePack.table.metaDataFields[i];
      if (field.search) {
        return true;
      }
    }
    return false;
  }

  private isFilterableElement(element: any): boolean {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const field = this.tablePack.table.metaDataFields[i];
      if (field.search) {
        if (
          String(element[field.name])
            .toLowerCase()
            .includes(field.search.toLowerCase())
        ) {
          return true;
        }
      }
    }
    return false;
  }

  public checkedRowsO($event: any[]) {
    this.checkedRows = $event;
  }

  public removeAllSelections($event: boolean) {
    if ($event) {
      this.triggerRemoveSelections += 1;
      this.checkedRows = [];
    }
  }

  public menuEvent($event: 'order' | 'search' | 'hide') {
    if ($event == 'order' || $event == 'search') {
      this.lastTaskRequested = $event;
      this.mngDataSource();
    } else {
      this.triggerUpdateTable += 1;
    }
  }

  public filterEvent($event: OptionFilterAnswerI): void {
    if ($event.shouldChange) {
      this.orderDataSource();
      if ($event.itemFilters.length != 0) {
        const depuratedFilters = this.depuratorFilters($event.itemFilters);
        this.data = this.filteredByFilters(depuratedFilters);
        this.tablePack.paginator.length = this.data.length;
      } else {
        this.tablePack.paginator.length = this.data.length;
      }
      this.tablePack.paginator.pageIndex = 0;
      this.getDataByPage();
      this.triggerUpdateTable += 1;
    }
  }

  private depuratorFilters(filters: ItemFilterI[]): ItemFilterI[] {
    const depuratedFilters: ItemFilterI[] = [];
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].itemFilterValues.selecteds.length != 0) {
        depuratedFilters.push(filters[i]);
      }
    }
    return depuratedFilters;
  }

  private filteredByFilters(filters: ItemFilterI[]): any[] {
    let clonedData = cloneDeepWith(this.data);
    for (let i = 0; i < filters.length; i++) {
      clonedData = this.filteredByFilter(clonedData, filters[i]);
    }
    return clonedData;
  }

  private filteredByFilter(data: any[], filter: ItemFilterI): any[] {
    const column = this.getNameColumn(filter.itemFilterColumn.selected);
    const values = filter.itemFilterValues.selecteds;
    const filtereds: any[] = [];
    if (values.length != 0) {
      for (let i = 0; i < data.length; i++) {
        if (this.isIncludedInValues(data[i], column, values)) {
          filtereds.push(data[i]);
        }
      }
      return filtereds;
    }
    return data;
  }

  private getNameColumn(alias: string): string {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const metaDataField = this.tablePack.table.metaDataFields[i];
      if (metaDataField.alias == alias) {
        return metaDataField.name;
      }
    }
    return '';
  }

  private isIncludedInValues(
    element: any,
    column: string,
    values: any[]
  ): boolean {
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      if (element[column] == value) {
        return true;
      }
    }
    return false;
  }

  public show(): void {
    console.log(this.data);
  }
}
