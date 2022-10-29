import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { orderBy } from 'lodash';
import { TablePackI } from 'src/app/table/models/interface/table-pack-i';
import { OrderI } from 'src/app/table/models/interface/table/order-i';
import { cloneDeepWith } from 'lodash';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.scss'],
})
export class TableModalComponent implements OnInit {
  triggerUpdateTable!: number;

  tablePack!: TablePackI;

  checkedRows!: any[];

  checkedRowsCloned!: any[];

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any
  ) {
    this.triggerUpdateTable = 0;
    this.checkedRows = cloneDeepWith(dataDialog.checkedRows);
    this.tablePack = dataDialog.tablePack;
    this.tablePack.paginator.length = this.checkedRows.length;
  }

  ngOnInit(): void {
    this.setTablePack();
  }

  private setTablePack(): void {
    this.tablePack.table.dataSource = [];
    this.tablePack.async = false;
    this.tablePack.table.isLoading = false;
    this.tablePack.table.configuration = {
      draggedAndDropped: this.tablePack.table.configuration?.draggedAndDropped,
      selection: false,
      ordering: this.tablePack.table.configuration?.ordering,
    };
    this.filter();
  }

  public pageEvent($event: any) {
    this.filter();
    this.triggerUpdateTable += 1;
  }

  private filter() {
    const pageIndex = this.tablePack.paginator.pageIndex;
    const pageSize = this.tablePack.paginator.pageSize;
    this.tablePack.table.dataSource = [
      ...this.checkedRows.slice(
        pageIndex * pageSize,
        pageIndex * pageSize + pageSize
      ),
    ];
  }

  public show() {
    console.log(this);
  }

  public sortEvent($event: OrderI) {
    this.sortEventSync($event);
    this.filter();
    this.triggerUpdateTable += 1;
  }

  private sortEventSync($sortEvent: OrderI): void {
    if ($sortEvent.direction.length != 0) {
      this.checkedRows = orderBy(
        this.checkedRows,
        [$sortEvent.active],
        [this.getDirection($sortEvent.direction)]
      );
    } else {
      this.checkedRows = this.dataDialog.checkedRows;
    }
  }

  private getDirection(direction: string): 'asc' | 'desc' {
    if (direction == 'asc') {
      return 'asc';
    }
    return 'desc';
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
