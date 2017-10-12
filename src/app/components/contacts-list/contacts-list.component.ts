import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts:Array<Object>;
  searchTerm:string;

  constructor(private contactsService:ContactsService) { 

  	this.contacts = contactsService.getContacts();
  }

  ngOnInit() {

  	this.contactsService.getSearchTerm().subscribe(searchTerm => {
  		//console.log(searchTerm);
  		this.searchTerm = searchTerm;
  	})
  }

}
