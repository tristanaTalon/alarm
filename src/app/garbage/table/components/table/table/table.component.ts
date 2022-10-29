import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MetaDataFieldI } from '../../../models/interface/table/meta-data-field-i';
import { TableI } from 'src/app/table/models/interface/table/table-i';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { EventEmitter } from '@angular/core';
import { OrderI } from '../../../models/interface/table/order-i';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() table!: TableI;

  @Input() triggerUpdateComponent!: number;

  fields!: string[];

  @ViewChild(MatTable) tableDOM!: MatTable<any>;

  cdkDragDisabled!: boolean;

  @Output() sortEventO: EventEmitter<OrderI> = new EventEmitter<OrderI>();

  checkedFromChild!: boolean;

  checkedRows!: any[];

  @Output() checkedRowsO: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input() triggerRemoveSelections!: number;

  constructor() {
    this.cdkDragDisabled = true;
    this.checkedFromChild = false;
    this.checkedRows = [];
  }

  ngOnInit(): void {
    this.mngTableConfig();
    this.mngFields();
  }

  private mngFields(): void {
    this.resetFields();
    this.setFields();
  }

  private resetFields(): void {
    this.fields = [];
  }

  private setFields(): void {
    const fields: string[] = [];
    for (let i = 0; i < this.table.metaDataFields.length; i++) {
      if (this.table.metaDataFields[i].visible) {
        fields.push(this.table.metaDataFields[i].name);
      }
    }
    this.fields = fields;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['triggerUpdateComponent']) {
        this.mngTableConfig();
        this.setCheckedRows();
        this.notifyChangeCheckedToHeaderCell();
      }
      if (
        changes['triggerRemoveSelections'] &&
        !changes['triggerRemoveSelections'].isFirstChange()
      ) {
        this.mngTableConfig();
        this.checkedRows = [];
        this.notifyChangeCheckedToHeaderCell();
      }
    }
  }

  private mngTableConfig(): void {
    if (this.table.configuration?.selection) {
      this.mngSelection();
    }
    if (this.table.configuration?.draggedAndDropped) {
      this.mngDraggedAndDropped();
    }
    this.mngFields();
  }

  private mngDraggedAndDropped(): void {
    this.addDraggedAndDroppedColumn();
    if (!this.draggedAndDroppedIsInMetaDataFields()) {
      this.addDraggedAndDroppedMetaDataFields();
    }
  }

  private addDraggedAndDroppedColumn(): void {
    this.table.dataSource = this.table.dataSource.map((e: any) => {
      e.DraggedAndDropped = 'DraggedAndDropped';
      return e;
    });
  }

  private addDraggedAndDroppedMetaDataFields(): void {
    this.table.metaDataFields.unshift({
      name: 'DraggedAndDropped',
      alias: 'DraggedAndDropped',
      visible: true,
      direction: '',
      search: '',
      uniqueValues:[]
    });
  }

  private draggedAndDroppedIsInMetaDataFields(): boolean {
    return Boolean(
      this.table.metaDataFields.find(
        (metaDataField: MetaDataFieldI) =>
          metaDataField.name == 'DraggedAndDropped'
      )
    );
  }

  private mngSelection(): void {
    this.addSelectionColumn();
    if (!this.selectionIsInMetaDataFields()) {
      this.addSelectionMetaDataFields();
    }
  }

  private addSelectionColumn(): void {
    this.table.dataSource = this.table.dataSource.map((e: any) => {
      e.Selection = false;
      return e;
    });
  }

  private addSelectionMetaDataFields(): void {
    this.table.metaDataFields.unshift({
      name: 'Selection',
      alias: 'Selection',
      visible: true,
      direction: '',
      search: '',
      uniqueValues:[]
    });
  }

  private selectionIsInMetaDataFields(): boolean {
    return Boolean(
      this.table.metaDataFields.find(
        (metaDataField: MetaDataFieldI) => metaDataField.name == 'Selection'
      )
    );
  }

  public draggedAndDropped($event: CdkDragDrop<any>) {
    moveItemInArray(
      this.table.dataSource,
      $event.previousIndex,
      $event.currentIndex
    );
    this.tableDOM.renderRows();
  }

  public cdkDragDisabledO($event: boolean) {
    this.cdkDragDisabled = $event;
  }

  public sortEvent($event: OrderI): void {
    for (let i = 0; i < this.table.metaDataFields.length; i++) {
      const element = this.table.metaDataFields[i];
      if (element.name == $event.active) {
        element.direction = $event.direction;
      } else {
        element.direction = '';
      }
    }
    this.sortEventO.emit($event);
  }

  public isSortedDisabled(currentColumnName: string): boolean {
    return !Boolean(
      this.table.configuration?.ordering?.find(
        (columnName: string) => columnName == currentColumnName
      )
    );
  }

  public isSelected(row: any): boolean {
    if (this.table.configuration?.selection) {
      if (row.Selection) {
        return row.Selection;
      }
    }
    return false;
  }

  public clickHeaderCheck($event: boolean): void {
    this.table.dataSource = this.table.dataSource.map((e: any) => {
      e.Selection = $event;
      return e;
    });
    this.mngCheckedRows();
    this.checkedRowsO.emit(this.checkedRows);
  }

  public clickRowCheck($event: boolean): void {
    this.mngCheckedRows();
    this.notifyChangeCheckedToHeaderCell();
    this.checkedRowsO.emit(this.checkedRows);
  }

  private notifyChangeCheckedToHeaderCell() {
    this.checkedFromChild = !this.checkedFromChild;
  }

  private isInCheckedRows(row: any): boolean {
    return Boolean(this.checkedRows.find((e) => e['Código'] == row['Código']));
  }

  private addCheckedRow(row: any): void {
    if (!this.isInCheckedRows(row)) {
      this.checkedRows.push(row);
    }
  }

  private removeCheckedRow(row: any): void {
    if (this.isInCheckedRows(row)) {
      this.checkedRows = this.checkedRows.filter(
        (e: any) => row['Código'] != e['Código']
      );
    }
  }

  private mngCheckedRows(): void {
    for (let i = 0; i < this.table.dataSource.length; i++) {
      this.mngCheckedRow(this.table.dataSource[i]);
    }
  }

  private mngCheckedRow(row: any): void {
    if (row.Selection) {
      this.addCheckedRow(row);
    } else {
      this.removeCheckedRow(row);
    }
  }

  private setCheckedRows(): void {
    for (let i = 0; i < this.table.dataSource.length; i++) {
      const row = this.table.dataSource[i];
      if (this.isInCheckedRows(row)) {
        this.table.dataSource[i].Selection = true;
      }
    }
  }

  public show() {
    console.log(this);
  }

  public getSort(): OrderI {
    const sort: OrderI = { direction: '', active: '' };
    for (let i = 0; i < this.table.metaDataFields.length; i++) {
      const element = this.table.metaDataFields[i];
      if (element.direction) {
        sort.direction = element.direction;
        sort.active = element.name;
      }
    }
    return sort;
  }
}
