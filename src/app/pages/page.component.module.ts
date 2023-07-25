import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PageRoute } from './page.component.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  // eslint-disable-next-line
  declarations: [
    /** Pages */
    HomeComponent,
  ],
  providers: [],
  exports: [],
  imports: [CommonModule, RouterModule.forChild(PageRoute)],
})
export class PageModule {}
