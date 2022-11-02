import { Component, OnInit } from '@angular/core';
import { ButtonC } from '../../../shared/models/classes/button/buttonC';
import { getMenuSeeder } from '../../seeders/menu-seeder';
import { Router } from '@angular/router';
import { ActivingRoutesService } from '../../../shared/services/activingRoutes/activing-routes.service';
import { ArrayC } from '../../../shared/models/classes/helpers/array/arrayC';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  leftOptions!: ButtonC[];

  rightOptions!: ButtonC[];

  invalidUrl!: string;

  defaultUrl!: string;

  urlSegmentIndex!: number;

  constructor(
    private router: Router,
    private activingRoutes: ActivingRoutesService
  ) {
    this.settingOptions();
    this.settingUrl();
    this.ActivingRoutesWhenUrlChanges();
  }

  private settingOptions(): void {
    this.leftOptions = [];
    this.rightOptions = [];
    for (let i = 0; i < getMenuSeeder().length; i++) {
      const option = getMenuSeeder()[i];
      if (option.getButtonContent().getName() == 'Support me') {
        this.rightOptions.push(option);
      } else {
        this.leftOptions.push(option);
      }
    }
  }

  private settingUrl(): void {
    this.invalidUrl = '/';
    this.defaultUrl = this.leftOptions[0].getUrl();
    this.urlSegmentIndex = 1;
  }

  private ActivingRoutesWhenUrlChanges(): void {
    const options = ArrayC.joinedArrays([this.leftOptions, this.rightOptions]);
    this.activingRoutes.activateRoutesWhenUrlChanges(
      options,
      this.invalidUrl,
      this.defaultUrl,
      this.urlSegmentIndex
    );
  }

  public navigate(option: ButtonC): void {
    this.router.navigateByUrl(option.getUrl());
  }
}
