import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { DateRangeC } from '../../models/classes/date-range-c';
import { cloneDeepWith } from 'lodash';
import { UtilsC } from '../../models/classes/utils-c';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgressBarComponent implements OnChanges {
  @Input() dateRange!: DateRangeC;

  isMouseInCompontet!: boolean;

  utils!: UtilsC;

  constructor() {
    this.isMouseInCompontet = false;
    this.utils = new UtilsC();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateRange'].currentValue) {
      this.dateRange = cloneDeepWith(changes['dateRange'].currentValue);
      this.dateRange.ignoreTime();
    }
  }

  show(): void {
    console.log(this.dateRange);
  }

  cloneAndIgnoreTime(): void {
    this.dateRange = cloneDeepWith(this.dateRange);
    this.dateRange.ignoreTime();
  }

  over(): void {
    this.isMouseInCompontet = true;
  }

  out(): void {
    this.isMouseInCompontet = false;
  }

  porcentUntilNow(): void {
    console.log(this.dateRange.porcentProgressUntilNow());
  }

  roundedPorcentProgress(): number {
    let roundedPorcentProgress = this.utils.commonRoundOutHundredths(
      this.dateRange.porcentProgressUntilNow()
    );
    if (roundedPorcentProgress > 100) {
      return 100;
    }
    return roundedPorcentProgress;
  }
}
