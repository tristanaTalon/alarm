import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponentsComponent } from './page-components/page-components.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponentsComponent,
    children: [
      {
        path: 'tooltip',
        loadChildren: () =>
          import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

// {
//   path: 'tooltip',
//   loadChildren: () =>
//     import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
// },
