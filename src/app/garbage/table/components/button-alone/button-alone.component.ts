import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonI } from '../../models/interface/button/button-i';

@Component({
  selector: 'app-button-alone',
  templateUrl: './button-alone.component.html',
  styleUrls: ['./button-alone.component.scss'],
})
export class ButtonAloneComponent implements OnInit {
  @Input() button!: ButtonI;

  @Input() class!: '' | 'start' | 'mid' | 'end';

  @Output() clickedO: EventEmitter<true> = new EventEmitter<true>();

  constructor() {
    this.class = '';
  }

  ngOnInit(): void {}

  public clicked(): void {
    this.clickedO.emit(true);
  }

  public isActivated(): boolean {
    if (this.button.actived) {
      return this.button.actived;
    }
    return false;
  }

  public messageWhenIsActivated(): string {
    if (this.class == 'start' || this.class == '') {
      if (this.button.amount) {
        return '/ ' + this.button.amount;
      }
    }
    return '';
  }

  public getClass(): string[] {
    if (this.class == 'start') {
      return ['activated-start'];
    }
    if (this.class == 'end') {
      return ['activated-end'];
    }
    return ['class'];
  }
}
