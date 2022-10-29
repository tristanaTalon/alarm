import { ItemFilterColumnI } from './item-filter-column-i';
import { IntemFilterValuesI } from './item-filter-values-i';

export interface ItemFilterI {
  index: number;

  itemFilterColumn: ItemFilterColumnI;

  itemFilterValues: IntemFilterValuesI;
}
