import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { OptionI } from '../../../models/interface/menu/option-i';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OptionComponent implements OnInit {
  @Input() option!: OptionI;

  @ViewChild('menuTrigger') menu?: MatMenuTrigger;

  @Output() shouldChangeO: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() menuTriggerO: EventEmitter<MatMenuTrigger> =
    new EventEmitter<MatMenuTrigger>();

  sentAnswer!: boolean;

  @Input() class!: '' | 'start' | 'mid' | 'end';

  @Output() clickedO: EventEmitter<true> = new EventEmitter<true>();

  constructor() {
    this.sentAnswer = false;
    this.class = '';
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.menuTriggerO.emit(this.menu);
  }

  public closedMenu() {
    if (!this.sentAnswer) {
      this.shouldChangeO.emit(false);
    } else {
      this.sentAnswer = false;
    }
  }

  public answerCanvas($event: boolean) {
    this.sentAnswer = true;
    this.menu?.closeMenu();
    this.shouldChangeO.emit($event);
  }

  public openMenu(): void {
    this.menu?.openMenu();
  }

  public clicked(): void {
    this.clickedO.emit(true);
  }
}
