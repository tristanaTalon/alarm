import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemFilterI } from 'src/app/table/models/interface/menu/item-filter-i';

@Component({
  selector: 'app-item-filter-fast',
  templateUrl: './item-filter-fast.component.html',
  styleUrls: ['./item-filter-fast.component.scss'],
})
export class ItemFilterFastComponent implements OnInit {
  @Input() itemFilter!: ItemFilterI;

  form!: FormGroup;

  @Output() changedItemFilterO: EventEmitter<true> = new EventEmitter<true>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      values: new FormControl(this.itemFilter.itemFilterValues.selecteds),
    });
    this.listenerOfValues();
  }

  private listenerOfValues(): void {
    this.form.controls['values'].valueChanges.subscribe((values: any[]) => {
      this.itemFilter.itemFilterValues.selecteds = values;
      this.changedItemFilterO.emit(true);
    });
  }

  public show(): void {
    console.log(this.itemFilter);
  }
}
