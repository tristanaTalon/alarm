import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ItemFilterI } from 'src/app/table/models/interface/menu/item-filter-i';
import { OptionI } from '../../../models/interface/menu/option-i';
import { cloneDeepWith } from 'lodash';
import { OptionFilterAnswerI } from '../../../models/interface/menu/option-filter-answer-i';

@Component({
  selector: 'app-option-filter',
  templateUrl: './option-filter.component.html',
  styleUrls: ['./option-filter.component.scss'],
})
export class OptionFilterComponent implements OnInit {
  @Input() optionFilterFast!: OptionI;

  @Input() optionFilterAdvanced!: OptionI;

  @Input() data!: any[];

  menuTriggerOptionFast?: MatMenuTrigger;

  menuTriggerOptionAdvanced?: MatMenuTrigger;

  itemFiltersCommon!: ItemFilterI[];

  itemFiltersCommonInit!: ItemFilterI[];

  itemFiltersCommonLast!: ItemFilterI[];

  amountOfChangesFromAdvanced!: number;

  amountOfChangesFromFast!: number;

  @Output() itemFiltersO: EventEmitter<OptionFilterAnswerI> =
    new EventEmitter<OptionFilterAnswerI>();

  areWeIntoComponent!: boolean;

  constructor() {
    this.data = [];
    this.itemFiltersCommon = [];
    this.itemFiltersCommonInit = [];
    this.itemFiltersCommonLast = [];
    this.amountOfChangesFromAdvanced = 0;
    this.amountOfChangesFromFast = 0;
    this.areWeIntoComponent = false;
  }

  ngOnInit(): void {}

  public setMenuTriggerOptionAdvanced($event: MatMenuTrigger): void {
    this.menuTriggerOptionAdvanced = $event;
  }

  public setMenuTriggerOptionFast($event: MatMenuTrigger): void {
    this.menuTriggerOptionFast = $event;
  }

  public changeToOptionAdvanced() {
    this.menuTriggerOptionFast?.closeMenu();
    this.menuTriggerOptionAdvanced?.openMenu();
    this.shouldChangeFilter(false, true);
  }

  public changeToOptionFast() {
    this.menuTriggerOptionAdvanced?.closeMenu();
    this.menuTriggerOptionFast?.openMenu();
    this.shouldChangeFilter(false, true);
  }

  public changeItemFiltersCommonFromItemFilterFast(
    $event: ItemFilterI[]
  ): void {
    this.amountOfChangesFromFast += 1;
    this.itemFiltersCommon = $event;
    this.itemFiltersCommonLast = $event;
    this.mngButton(this.itemFiltersCommon);
  }

  public changeItemFiltersCommonFromItemFilterAdvanced(
    $event: ItemFilterI[]
  ): void {
    this.amountOfChangesFromAdvanced += 1;
    this.itemFiltersCommon = $event;
    this.itemFiltersCommonLast = $event;
    this.mngButton(this.itemFiltersCommon);
  }

  public shouldChangeFilter(
    $event: boolean,
    intoComponent: boolean = false
  ): void {
    if (!$event && !intoComponent) {
      this.closedWhenShouldntChange();
    }
    if (!$event && intoComponent) {
      this.openedFromIn();
    }
    if ($event && !intoComponent) {
      this.closedWhenShouldChange();
    }
    this.amountOfChangesFromFast += 1;
    this.amountOfChangesFromAdvanced += 1;
  }

  private closedWhenShouldntChange(): void {
    this.itemFiltersCommon = cloneDeepWith(this.itemFiltersCommonInit);
    this.itemFiltersO.emit({ itemFilters: [], shouldChange: false });
    this.mngButton(this.itemFiltersCommonInit);
  }

  private mngButton(itemFilters: ItemFilterI[]): void {
    const amount = this.amountOfActivatedItemFilters(itemFilters);
    this.optionFilterFast.button.amount = amount;
    if (amount) {
      this.optionFilterFast.button.actived = true;
      this.optionFilterAdvanced.button.actived = true;
    } else {
      this.optionFilterFast.button.actived = false;
      this.optionFilterAdvanced.button.actived = false;
    }
  }

  private amountOfActivatedItemFilters(itemFilters: ItemFilterI[]): number {
    let amount = 0;
    for (let i = 0; i < itemFilters.length; i++) {
      if (itemFilters[i].itemFilterValues.selecteds.length != 0) {
        amount += 1;
      }
    }
    return amount;
  }

  private openedFromIn(): void {
    this.itemFiltersCommon = this.itemFiltersCommonLast;
    this.itemFiltersO.emit({ itemFilters: [], shouldChange: false });
    this.mngButton(this.itemFiltersCommonLast);
  }

  private closedWhenShouldChange(): void {
    this.itemFiltersCommonInit = cloneDeepWith(this.itemFiltersCommonLast);
    this.itemFiltersO.emit({
      itemFilters: this.itemFiltersCommonLast,
      shouldChange: true,
    });
    this.mngButton(this.itemFiltersCommonLast);
  }

  public openedFromOut(): void {
    this.itemFiltersCommonLast = cloneDeepWith(this.itemFiltersCommonInit);
    this.itemFiltersCommon = cloneDeepWith(this.itemFiltersCommonLast);
    this.amountOfChangesFromFast += 1;
    this.amountOfChangesFromAdvanced += 1;
  }

  public show(): void {
    console.log(this);
  }
}
