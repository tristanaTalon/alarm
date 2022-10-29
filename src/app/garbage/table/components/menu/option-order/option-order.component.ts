import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
  SimpleChanges,
} from '@angular/core';
import { MetaDataFieldI } from 'src/app/table/models/interface/table/meta-data-field-i';
import { OptionI } from '../../../models/interface/menu/option-i';
import { ItemOrderI } from '../../../models/interface/menu/item-order-i';
import { OrderI } from '../../../models/interface/table/order-i';
import { isEqual, cloneDeepWith } from 'lodash';

@Component({
  selector: 'app-option-order',
  templateUrl: './option-order.component.html',
  styleUrls: ['./option-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OptionOrderComponent implements OnInit {
  @Input() option!: OptionI;

  @Output() getFieldsChangesO: EventEmitter<MetaDataFieldI[]> =
    new EventEmitter<MetaDataFieldI[]>();

  itemOrders!: ItemOrderI[];

  clonedOption!: OptionI;

  @Input() triggerUpdateOptionOrder!: number;

  constructor() {}

  ngOnInit(): void {
    this.clonedOption = this.getClonedOption();
    this.itemOrders = this.getItemOrders(this.clonedOption);
  }

  private getClonedOption(): OptionI {
    return cloneDeepWith(this.option);
  }

  private getItemOrders(option: OptionI): ItemOrderI[] {
    const itemOrders: ItemOrderI[] = [];
    for (let i = 0; i < option.canvas.fields.length; i++) {
      const field = option.canvas.fields[i];
      if (this.isItemOrder(field)) {
        itemOrders.push(this.getItemOrder(field));
      }
    }
    return itemOrders;
  }

  private isItemOrder(field: MetaDataFieldI): boolean {
    return this.isValidField(field) && Boolean(field.direction);
  }

  private getItemOrder(field: MetaDataFieldI): ItemOrderI {
    return {
      columns: this.getColumns(field, this.clonedOption),
      order: this.getOrder(field),
    };
  }

  private getColumns(field: MetaDataFieldI, option: OptionI): string[] {
    const columns: string[] = [];
    for (let i = 0; i < option.canvas.fields.length; i++) {
      const fieldAux = option.canvas.fields[i];
      if (this.isValidField(fieldAux)) {
        if (!Boolean(fieldAux.direction) || fieldAux.alias == field.alias) {
          columns.push(fieldAux.alias);
        }
      }
    }
    return columns;
  }

  private isValidField(field: MetaDataFieldI): boolean {
    return field.name != 'DraggedAndDropped' && field.name != 'Selection';
  }

  private getOrder(field: MetaDataFieldI): OrderI {
    return {
      active: field.alias,
      direction: field.direction,
    };
  }

  public newItemOrder(): void {
    if (this.isNewItemOrder(this.clonedOption)) {
      this.setNewItemOrder(this.clonedOption);
      this.addNewItemOrder();
    }
    this.mngButton(this.itemOrders);
  }

  private isNewItemOrder(option: OptionI): boolean {
    for (let i = 0; i < option.canvas.fields.length; i++) {
      const field = option.canvas.fields[i];
      if (this.isValidField(field) && !Boolean(field.direction)) {
        return true;
      }
    }
    return false;
  }

  private setNewItemOrder(option: OptionI): void {
    for (let i = 0; i < option.canvas.fields.length; i++) {
      const field = option.canvas.fields[i];
      if (this.isValidField(field) && !Boolean(field.direction)) {
        field.direction = 'asc';
        break;
      }
    }
  }

  private addNewItemOrder(): void {
    this.itemOrders = this.getItemOrders(this.clonedOption);
  }

  private mngButton(itemOrders: ItemOrderI[]): void {
    const amount = this.amountOfOrderedColumns(itemOrders);
    if (amount) {
      this.option.button.actived = true;
    } else {
      this.option.button.actived = false;
    }
  }

  private amountOfOrderedColumns(itemOrders: ItemOrderI[]): number {
    let amount = 0;
    for (let i = 0; i < itemOrders.length; i++) {
      if (itemOrders[i].order.direction) {
        amount += 1;
      }
    }
    return amount;
  }

  public removeItemOrder($itemOrder: ItemOrderI) {
    for (let i = 0; i < this.clonedOption.canvas.fields.length; i++) {
      const field = this.clonedOption.canvas.fields[i];
      if ($itemOrder.order.active == field.alias) {
        field.direction = '';
        break;
      }
    }
    this.itemOrders = this.getItemOrders(this.clonedOption);
    this.mngButton(this.itemOrders);
  }

  public updateItemOrder($event: ItemOrderI[]) {
    this.removeItemOrder($event[0]);
    this.addItemOrder($event[1], this.clonedOption);
    this.mngButton(this.itemOrders);
  }

  private addItemOrder($itemOrder: ItemOrderI, option: OptionI): void {
    for (let i = 0; i < option.canvas.fields.length; i++) {
      const field = option.canvas.fields[i];
      if ($itemOrder.order.active == field.alias) {
        field.direction = $itemOrder.order.direction;
        break;
      }
    }
    this.itemOrders = this.getItemOrders(option);
  }

  public shouldChange($shouldChange: boolean): void {
    if ($shouldChange) {
      this.getFieldsChangesO.emit(this.clonedOption.canvas.fields);
      this.mngButton(this.itemOrders);
    } else {
      this.clonedOption = cloneDeepWith(this.option);
      this.clonedOption = this.getClonedOption();
      this.itemOrders = this.getItemOrders(this.clonedOption);
      this.getFieldsChangesO.emit([]);
      this.mngButton(this.itemOrders);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['triggerUpdateOptionOrder']) {
        if (!changes['triggerUpdateOptionOrder'].firstChange) {
          this.clonedOption = this.getClonedOption();
          this.itemOrders = this.getItemOrders(this.clonedOption);
          this.mngButton(this.itemOrders);
        }
      }
    }
  }

  public show() {
    console.log(this.itemOrders);
  }
}

// Que al cerrar me guarde o no
// Que me cambie los cambios seegún afuera
// Configurar la posición: que no cambie de acuerdo al orden de la columna, sino al orden en el que se le agregó
