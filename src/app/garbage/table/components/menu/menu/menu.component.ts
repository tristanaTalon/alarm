import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { OptionI } from '../../../models/interface/menu/option-i';
import { getOptionHide } from '../../../models/data-mock/menu/option-hide-mock';
import { MetaDataFieldI } from '../../../models/interface/table/meta-data-field-i';
import { MenuI } from '../../../models/interface/menu/menu-i';
import { getOptionSort } from '../../../models/data-mock/menu/option-order';
import { ItemFilterI } from '../../../models/interface/menu/item-filter-i';
import { OptionFilterAnswerI } from '../../../models/interface/menu/option-filter-answer-i';
import {
  getOptionFilterFast,
  getOptionFilterAdvanced,
} from '../../../models/data-mock/menu/option-filter-mock';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menu!: MenuI;

  @Input() data!: any[];

  @Output() menuEventO: EventEmitter<'search' | 'order' | 'hide'> =
    new EventEmitter<'search' | 'order' | 'hide'>();

  optionHide!: OptionI;

  optionSort!: OptionI;

  triggerUpdateOptionSort!: number;

  @Input() triggerOptionOrder!: number;

  optionFilterFast!: OptionI;

  optionFilterAdvanced!: OptionI;

  @Output() itemFiltersO: EventEmitter<OptionFilterAnswerI> =
    new EventEmitter<OptionFilterAnswerI>();

  constructor() {
    this.data = [];
    this.optionHide = getOptionHide();
    this.optionSort = getOptionSort();
    this.triggerUpdateOptionSort = 0;
    this.optionFilterFast = getOptionFilterFast();
    this.optionFilterAdvanced = getOptionFilterAdvanced();
  }

  ngOnInit(): void {
    this.optionHide.canvas.fields = this.menu.metaDataFields;
    this.optionSort.canvas.fields = this.menu.metaDataFields;
    this.optionFilterFast.canvas.fields = this.menu.metaDataFields;
    this.optionFilterAdvanced.canvas.fields = this.menu.metaDataFields;
  }

  public updateFieldsByOptionHide($event: MetaDataFieldI[]): void {
    if ($event.length != 0) {
      this.updateVisibilityOfFields($event);
      this.triggerUpdateOptionSort += 1;
      this.menuEventO.emit('hide');
    }
  }

  private updateVisibilityOfFields(fields: MetaDataFieldI[]): void {
    for (let i = 0; i < fields.length; i++) {
      this.updateVisibilityOfField(fields[i]);
    }
  }

  private updateVisibilityOfField(field: MetaDataFieldI): void {
    for (let i = 0; i < this.optionHide.canvas.fields.length; i++) {
      if (this.optionHide.canvas.fields[i].name == field.name) {
        this.optionHide.canvas.fields[i].visible = field.visible;
      }
    }
  }

  public updateFieldByOptionOrder($event: MetaDataFieldI[]): void {
    if ($event.length != 0) {
      this.updateOrderOfFields($event);
      this.menuEventO.emit('order');
    }
  }

  private updateOrderOfFields(fields: MetaDataFieldI[]) {
    for (let i = 0; i < fields.length; i++) {
      this.updateOrderOfField(fields[i]);
    }
  }

  private updateOrderOfField(field: MetaDataFieldI) {
    for (let i = 0; i < this.optionSort.canvas.fields.length; i++) {
      if (this.optionSort.canvas.fields[i].name == field.name) {
        this.optionSort.canvas.fields[i].direction = field.direction;
      }
    }
  }

  public search($event: string): void {
    for (let i = 0; i < this.menu.metaDataFields.length; i++) {
      const field = this.menu.metaDataFields[i];
      if (field.name != 'DraggedAndDropped' && field.name != 'Selection') {
        field.search = $event;
      }
    }
    this.menuEventO.emit('search');
  }

  public filter($event: OptionFilterAnswerI): void {
    this.itemFiltersO.emit($event);
  }

  public show(): void {
    console.log(this.data);
  }
}
