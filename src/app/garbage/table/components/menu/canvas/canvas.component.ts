import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CanvasI } from '../../../models/interface/menu/canvas-i';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @Input() canvas!: CanvasI;

  @Output() answerCanvasO: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public cancel(): void {
    this.answerCanvasO.emit(false);
  }

  public accept(): void {
    this.answerCanvasO.emit(true);
  }
}
