import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { getIconsSeeder } from '../../seeders/icon-seeder';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    for (const icon of getIconsSeeder()) {
      this.matIconRegistry.addSvgIcon(
        icon.getName(),
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.getUrl())
      );
    }
  }
}
