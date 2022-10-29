import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemFilterI } from 'src/app/table/models/interface/menu/item-filter-i';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-filter-advanced',
  templateUrl: './item-filter-advanced.component.html',
  styleUrls: ['./item-filter-advanced.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemFilterAdvancedComponent implements OnInit {
  @Input() itemFilter!: ItemFilterI;

  form!: FormGroup;

  @Output() changedColumnO: EventEmitter<number> = new EventEmitter<number>();

  @Output() removedO: EventEmitter<number> = new EventEmitter<number>();

  @Output() changedValuesO: EventEmitter<true> = new EventEmitter<true>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      column: new FormControl(this.itemFilter.itemFilterColumn.selected),
      values: new FormControl(this.itemFilter.itemFilterValues.selecteds),
    });
    this.listenerOfColumn();
    this.listenerOfValues();
  }

  private listenerOfColumn(): void {
    this.form.controls['column'].valueChanges.subscribe((column: string) => {
      this.itemFilter.itemFilterColumn.selected = column;
      this.form.controls['values'].setValue([]);
      this.changedColumnO.emit(this.itemFilter.index);
    });
  }

  private listenerOfValues(): void {
    this.form.controls['values'].valueChanges.subscribe((values: any[]) => {
      this.itemFilter.itemFilterValues.selecteds = values;
    });
  }

  public getPlaceholderOfValues(): string {
    if (this.existColumn()) {
      return 'Select values';
    }
    return 'Select a column first';
  }

  public existColumn(): boolean {
    if (this.itemFilter.itemFilterColumn.selected) {
      return true;
    }
    return false;
  }

  public remove(): void {
    this.removedO.emit(this.itemFilter.index);
  }

  public openedChange($event: boolean): void {
    if (!$event) {
      this.changedValuesO.emit(true);
    }
  }

  public show(): void {
    console.log(this);
  }
}
