import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ContactDetailsComponent } from '../components/contacts/contact-details/contact-details.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { SearchPipe } from '../pipes/search.pipe';

const appRoutes:Routes = [
 { path: 'contacts', component: ContactsListComponent },
 { path: 'contacts/:id', component: ContactDetailsComponent },
 { path: 'messages', component: MessagesComponent },
 { path: '', redirectTo: '/contacts', pathMatch: 'full'}
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	appRoutes
    ),
    FormsModule
  ],
  declarations: [
    ContactsListComponent,
    MessagesComponent,
    LayoutComponent,
    ContactDetailsComponent,
    NavbarComponent,
    SearchPipe
  ], 
  exports: [
    LayoutComponent
  ],
})
export class AppRoutingModule { }