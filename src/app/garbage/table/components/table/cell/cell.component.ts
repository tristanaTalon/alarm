import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateRangeC } from 'src/app/progress-bar/models/classes/date-range-c';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() cell!: any;

  @Input() row!: any;

  @Output() checked = new EventEmitter<boolean>();

  @Output() cdkDragDisabledO = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  isCronogram(cell: any): boolean {
    return cell instanceof DateRangeC;
  }

  isProgress(cell: any): boolean {
    return false;
  }

  isNormal(cell: any): boolean {
    if (this.isCronogram(cell)) {
      return false;
    }
    if (this.isProgress(cell)) {
      return false;
    }
    if (this.isSelection(cell)) {
      return false;
    }
    if (this.isDraggedAndDropped(cell)) {
      return false;
    }
    return true;
  }

  isSelection(cell: any): boolean {
    return typeof cell == 'boolean';
  }

  isDraggedAndDropped(cell: any): boolean {
    return cell == 'DraggedAndDropped';
  }

  enter() {
    this.cdkDragDisabledO.emit(false);
  }

  leave() {
    this.cdkDragDisabledO.emit(true);
  }

  changed($event: MatCheckboxChange, cell: any) {
    cell = $event.checked;
    this.row.Selection = $event.checked;
    this.checked.emit($event.checked);
  }
}
