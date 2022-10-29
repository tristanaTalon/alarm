import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DirectionI } from '../../../models/interface/menu/direction-i';
import { ItemOrderI } from '../../../models/interface/menu/item-order-i';
import { OrderI } from '../../../models/interface/table/order-i';
import { FormControl, FormGroup } from '@angular/forms';
import { cloneDeepWith } from 'lodash';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemOrderComponent implements OnInit {
  orderForm!: FormGroup;

  @Input() itemOrder!: ItemOrderI;

  directions!: DirectionI[];

  @Output() updateItemOrder: EventEmitter<ItemOrderI[]> = new EventEmitter<
    ItemOrderI[]
  >();

  @Output() removedItemOrder: EventEmitter<ItemOrderI> =
    new EventEmitter<ItemOrderI>();

  constructor() {
    this.directions = [
      { key: 'asc', name: 'Ascendent' },
      { key: 'desc', name: 'Descendent' },
    ];
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      active: new FormControl(this.itemOrder.order.active),
      direction: new FormControl(this.itemOrder.order.direction),
    });
    this.orderForm.valueChanges.subscribe((order: OrderI) => {
      const clonedItemOrder = cloneDeepWith(this.itemOrder);
      clonedItemOrder.order = order;
      this.updateItemOrder.emit([this.itemOrder, clonedItemOrder]);
    });
  }

  public remove(): void {
    this.removedItemOrder.emit(this.itemOrder);
  }
}
