import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ButtonC } from '../../models/classes/button/buttonC';
import { StringC } from '../../models/classes/helpers/string/stringC';

@Injectable({
  providedIn: 'root',
})
export class ActivingRoutesService {
  constructor(private router: Router) {}

  public activateRoutesWhenUrlChanges(
    options: ButtonC[],
    invalidUrl: string,
    defaultUrl: string,
    urlSegmentIndex: number
  ): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url: string = event['url'];
        const validatedUrl: string = this.validatedUrl(
          url,
          invalidUrl,
          defaultUrl
        );
        console.log(url, validatedUrl);
        this.activateRoute(options, validatedUrl, urlSegmentIndex);
      });
  }

  private validatedUrl(
    url: string,
    invalidUrl: string,
    defaultUrl: string
  ): string {
    if (url == invalidUrl) {
      return defaultUrl;
    }
    return url;
  }

  private activateRoute(
    options: ButtonC[],
    url: string,
    urlSegmentIndex: number
  ): void {
    const urlSegment: string = StringC.subString(url, '/', urlSegmentIndex);
    for (let i = 0; i < options.length; i++) {
      const option: ButtonC = options[i];
      const optionUrl: string = StringC.subString(
        option.getUrl(),
        '/',
        urlSegmentIndex
      );
      if (urlSegment == optionUrl) {
        option.getButtonStatus().activate();
      } else {
        option.getButtonStatus().deactivate();
      }
    }
  }
}
