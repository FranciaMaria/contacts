import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {ContactsService} from './services/contacts.service';
//import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
//import { LayoutComponent } from './components/layout/layout.component';
//import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
//import { SearchPipe } from './pipes/search.pipe';
//import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    //SearchPipe,
    //NavbarComponent,
    //ContactDetailsComponent,
    //ExponentialPipe,
    //ContactsListComponent,
    //LayoutComponent,
    //MessagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  /*exports: [
    LayoutComponent
  ],*/
  providers: [ContactsService],
  bootstrap: [AppComponent]
})

export class AppModule { }