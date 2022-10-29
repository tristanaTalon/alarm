import { Component, Input, OnInit } from '@angular/core';
import { LabelI } from '../../models/interfaces/label-i';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  @Input() label!: LabelI | undefined;

  @Input() axis!: string;

  constructor() {}

  ngOnInit(): void {}

  getYAxisStyle(): object {
    return {
      width: '2rem',
      display: 'flex',
      'justify-content': 'flex-end',
      'margin-right': '3px',
    };
  }

  getStyle(): object {
    if (this.axis == 'x') {
      return {
        position: 'absolute',
        left: this.getLeft(),
      };
    }
    return this.getYAxisStyle();
  }

  geWidthBox(): number {
    // return 17.6;
    return 20.5;
  }

  getLeft(): string {
    if (this.label) {
      const position: any = this.label.position - 1;
      return position * this.geWidthBox() + 'px';
    }
    return '0px';
  }
}
