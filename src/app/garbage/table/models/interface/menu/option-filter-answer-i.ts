import { ItemFilterI } from './item-filter-i';

export interface OptionFilterAnswerI {
  itemFilters: ItemFilterI[];

  shouldChange: boolean;
}
