import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [];


@NgModule({
  declarations: [
  AppComponent,
  UserProfileComponent,
  FooterComponent,
  HeaderComponent,
  HomeComponent,
  ContactComponent,
  AboutComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule
  ],
  exports: [
  RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
