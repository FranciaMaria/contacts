import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ContactDetailsComponent } from '../components/contacts/contact-details/contact-details.component';

const appRoutes:Routes = [
 { path: 'contacts', component: ContactsListComponent },
 { path: 'contacts/contact/:id', component: ContactDetailsComponent },
 { path: 'messages', component: MessagesComponent },
 { path: '', redirectTo: '/contacts', pathMatch: 'full'}
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
    	appRoutes
    )
  ],
  declarations: [
  ContactsListComponent,
  MessagesComponent,
  LayoutComponent,
  ContactDetailsComponent
  ], 
  exports: [
  LayoutComponent
  ],
})
export class AppRoutingModule { }