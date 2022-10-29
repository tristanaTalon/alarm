import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
})
export class HeaderCellComponent implements OnInit, OnChanges {
  @Input() headerCell!: string;

  @Input() dataSource!: any[];

  @Output() checked = new EventEmitter<boolean>();

  @Input() checkedFromChildCheck!: boolean;

  indeterminated!: boolean;

  allComplete!: boolean;

  constructor() {
    this.indeterminated = false;
    this.allComplete = false;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes.hasOwnProperty('checkedFromChildCheck')) {
        this.mngAllComplete();
      }
    }
  }

  public isNormal(headerCell: string): boolean {
    if (this.isSelection(headerCell)) {
      return false;
    }
    if (this.isDraggedAndDropped(headerCell)) {
      return false;
    }
    return true;
  }

  public isSelection(headerCell: string): boolean {
    return headerCell === 'Selection';
  }

  private mngAllComplete(): void {
    this.allComplete = this.isAllComplete();
    this.indeterminated = this.isIndeterminated();
  }

  private isAllComplete(): boolean {
    if (this.dataSource.length != 0) {
      let allCompleteAux = true;
      for (let i = 0; i < this.dataSource.length; i++) {
        allCompleteAux = allCompleteAux && this.dataSource[i].Selection;
      }
      return allCompleteAux;
    }
    return false;
  }

  private isIndeterminated(): boolean {
    if (this.dataSource.length != 0) {
      if (this.isAllComplete()) {
        return false;
      } else {
        return this.isSomeSelected();
      }
    }
    return false;
  }

  private isSomeSelected(): boolean {
    if (this.dataSource.length != 0) {
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].Selection) {
          return true;
        }
      }
    }
    return false;
  }

  public show() {
    console.log(this.allComplete, this.indeterminated, this.dataSource);
    console.log(this.isSomeSelected(), this.isIndeterminated());
  }

  public change($event: MatCheckboxChange) {
    this.allComplete = !this.allComplete;
    this.checked.emit(this.allComplete);
  }

  isDraggedAndDropped(headerCell: string): boolean {
    return headerCell === 'DraggedAndDropped';
  }
}
