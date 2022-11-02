import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from './page-about/page-about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [PageAboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
