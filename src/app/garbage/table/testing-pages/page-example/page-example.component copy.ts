import { orderBy } from 'lodash';
import { getDataSource } from '../../models/data-mock/table/table-mock';
import { TablePackI } from '../../models/interface/table-pack-i';
import { OrderI } from '../../models/interface/table/order-i';

export class Page {
  tablePack!: TablePackI;

  data: any[];

  triggerUpdateTable!: number;

  constructor() {
    this.data = [];
    this.tablePack.table.isLoading = true;
    this.triggerUpdateTable = 0;
  }

  public ngOnInitTest(): void {
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
    }, 2000);
  }

  private getDataByPage(): void {
    const pageIndex = this.tablePack.paginator.pageIndex;
    const pageSize = this.tablePack.paginator.pageSize;
    this.tablePack.table.dataSource = [
      ...this.data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    ];
  }

  public sortEvent($event: OrderI) {
    this.mngDataSource();
  }

  public search($event: string): void {}

  public pageEvent($event: any) {}

  private mngDataSource(): void {
    this.orderDataSource();
    this.filterDataSource();
    this.paginateDataSource();
  }

  private isOrdenable(): boolean {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const element = this.tablePack.table.metaDataFields[i];
      if (element.direction) {
        return true;
      }
    }
    return false;
  }

  private orderDataSource(): void {
    if (this.isOrdenable()) {
      this.data = orderBy(this.data, this.getActiveds(), this.getDirections());
    } else {
      this.data = getDataSource();
    }
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

  private isFilterable(): boolean {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const field = this.tablePack.table.metaDataFields[i];
      if (field.search) {
        return true;
      }
    }
    return false;
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
    }
  }

  private isFilterableElement(element: any): boolean {
    for (let i = 0; i < this.tablePack.table.metaDataFields.length; i++) {
      const field = this.tablePack.table.metaDataFields[i];
      if (field.search) {
        if (String(element[field.name]).includes(field.search)) {
          return true;
        }
      }
    }
    return false;
  }

  private paginateDataSource(): void {}
}
