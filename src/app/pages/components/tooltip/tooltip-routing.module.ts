import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageExampleComponent } from './page-example/page-example.component';

const routes: Routes = [
  {
    path: 'example',
    component: PageExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TooltipRoutingModule {}
