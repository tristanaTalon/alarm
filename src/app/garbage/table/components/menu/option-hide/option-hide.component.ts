import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  Input,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { OptionI } from '../../../models/interface/menu/option-i';
import { MetaDataFieldI } from '../../../models/interface/table/meta-data-field-i';
import { cloneDeepWith, isEqual } from 'lodash';

@Component({
  selector: 'app-option-hide',
  templateUrl: './option-hide.component.html',
  styleUrls: ['./option-hide.component.scss'],
})
export class OptionHideComponent implements OnInit {
  @Input() option!: OptionI;

  @Output() getFieldsChangesO: EventEmitter<MetaDataFieldI[]> =
    new EventEmitter<MetaDataFieldI[]>();

  fields!: MetaDataFieldI[];

  constructor() {
    this.fields = [];
  }

  ngOnInit(): void {
    this.cloneFields();
  }

  private cloneFields(): void {
    for (let i = 0; i < this.option.canvas.fields.length; i++) {
      const field = this.option.canvas.fields[i];
      if (!(field.name == 'DraggedAndDropped' || field.name == 'Selection')) {
        this.fields.push(field);
      }
    }
    this.fields = cloneDeepWith(this.fields);
  }

  public change($event: boolean, field: MetaDataFieldI): void {
    field.visible = $event;
    this.mngButton(this.fields);
  }

  private mngButton(fields: MetaDataFieldI[]): void {
    const amount = this.amountOfHiddenFields(fields);
    this.option.button.amount = amount;
    if (amount) {
      this.option.button.actived = true;
    } else {
      this.option.button.actived = false;
    }
  }

  private amountOfHiddenFields(fields: MetaDataFieldI[]): number {
    let amount = 0;
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].visible) {
        amount += 1;
      }
    }
    return amount;
  }

  public shouldChange($event: boolean) {
    if ($event && this.hasFieldsChanged()) {
      this.getFieldsChangesO.emit(this.fields);
    } else {
      this.setInitStatus();
      this.getFieldsChangesO.emit([]);
    }
  }

  private hasFieldsChanged(): boolean {
    return !isEqual(this.fields, this.option.canvas.fields);
  }

  private setInitStatus(): void {
    for (let i = 0; i < this.fields.length; i++) {
      for (let j = 0; j < this.option.canvas.fields.length; j++) {
        if (this.fields[i].name == this.option.canvas.fields[j].name) {
          this.fields[i].visible = this.option.canvas.fields[j].visible;
        }
      }
    }
  }
}
