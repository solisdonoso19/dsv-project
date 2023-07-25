import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './pages/page.component';
const routes: Routes = [
  {
    path: 'pages',
    // eslint-disable-next-line
    component: PageComponent,
    children: [
      {
        path: '',
        // eslint-disable-next-line
        loadChildren: () =>
          import('./pages/page.component.module').then((m) => m.PageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
