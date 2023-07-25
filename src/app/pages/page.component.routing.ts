import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const pageRoute: Routes = [
  { path: 'division', component: HomeComponent, pathMatch: 'full' },
];
