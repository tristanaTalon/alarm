import { Component, Input, OnInit } from '@angular/core';
import { ScaleI } from '../../models/interfaces/scale-i';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss'],
})
export class ScalesComponent implements OnInit {
  @Input() scales!: ScaleI[];

  constructor() {}

  ngOnInit(): void {}
}
