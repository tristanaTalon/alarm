interface OptionI {
  name: string;
  url: string;
}

import { Component, ViewEncapsulation } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // options:
  constructor() {}

  // options: OptionI[] = [
  //   {
  //     name: 'Progress Bar',
  //     url: '/progress-bar',
  //   },
  //   {
  //     name: 'Alarm',
  //     url: '/alarm',
  //   },
  //   {
  //     name: 'Alarm2',
  //     url: '/alarm2',
  //   },
  //   {
  //     name: 'Git Calendar',
  //     url: '/git-calendar',
  //   },
  //   {
  //     name: 'Git Calendar2',
  //     url: '/git-calendar2',
  //   },
  //   {
  //     name: 'Table',
  //     url: '/table',
  //   },
  //   {
  //     name: 'Tooltip',
  //     url: '/tooltip',
  //   },
  // ];
  // constructor(private router: Router) {}
  // changed(event: MatSelectionListChange) {
  //   // console.log(event.options[0].value);
  //   this.router.navigateByUrl(event.options[0].value);
  // }
  // activated(url: string): string {
  //   console.log();
  //   return String(url == this.router.url);
  // }
}
