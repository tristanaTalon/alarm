import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () =>
      import('../pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('../pages/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'support-me',
    loadChildren: () =>
      import('../pages/support-me/support-me.module').then(
        (m) => m.SupportMeModule
      ),
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('../pages/tutorial/tutorial.module').then((m) => m.TutorialModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootRoutingModule {}
