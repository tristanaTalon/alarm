import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../../messages/confirm/confirm.component';
import { TableI } from '../../models/interface/table/table-i';
import {
  getMetaDataFields,
  getTable,
} from '../../models/data-mock/table/table-mock';
import { MenuComponent } from '../menu/menu/menu.component';
import { PaginatorI } from '../../models/interface/paginator/paginator-i';
import { TableModalComponent } from '../table/table-modal/table-modal.component';
import { cloneDeepWith } from 'lodash';
import { TablePackI } from '../../models/interface/table-pack-i';
import { ButtonDoubleI } from '../../models/interface/button/button-double-i';
import { ButtonI } from '../../models/interface/button/button-i';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss'],
})
export class SelectionButtonsComponent implements OnInit {
  @Input() checkedRows!: any[];

  @Input() tablePack!: TablePackI;

  @Output() removeAllSelectionsO: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {
    this.checkedRows = [];
  }

  ngOnInit(): void {}

  public show(): void {
    console.log('asdfasdf');
    this.dialog.open(TableModalComponent, {
      data: { tablePack: this.tablePack, checkedRows: this.checkedRows },
      disableClose: true,
    });
  }

  public remove(): void {
    console.log(12341234123412341234);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: 'Are you sure of deleting all selections?',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((response: boolean) => {
      this.removeAllSelectionsO.emit(response);
    });
  }

  public enabled(): boolean {
    return this.checkedRows.length != 0;
  }

  public getButtonStart(): ButtonI {
    return {
      tooltip: 'Show selecteds rows',
      ariaLabel: 'Show selecteds',
      icon: 'done_all',
      content: 'Show ' + this.checkedRows.length,
    };
  }

  public getButtonEnd(): ButtonI {
    return {
      tooltip: 'Unselect all',
      ariaLabel: 'Unselect all',
      icon: 'remove_done',
      content: '',
    };
  }
}
