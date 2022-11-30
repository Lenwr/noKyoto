import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { NokyotoComponent } from './nokyoto/nokyoto.component';
import { AccueilComponent } from './nokyoto/accueil/accueil.component';
import { ListeServiceComponent } from './nokyoto/liste-service/liste-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Navbar2Component,
    NokyotoComponent,
    AccueilComponent,
    ListeServiceComponent   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
