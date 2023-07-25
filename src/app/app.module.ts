import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './pages/page.component';
import { PageModule } from './pages/page.component.module';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, PageComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, PageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
