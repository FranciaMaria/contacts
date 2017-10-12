import { Component } from '@angular/core';
import {ContactsService} from './services/contacts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  contacts:Array<Object>

  constructor(private contactsService: ContactsService){
  	this.contacts = contactsService.getContacts();
  	console.log(this.contacts);

  }
}