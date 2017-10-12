import { Injectable } from '@angular/core';
//import { contacts } from '../contacts/contacts.component'; 
import {BehaviorSubject} from 'rxjs';  


@Injectable()
export class ContactsService {

	searchData = new BehaviorSubject('');


  constructor() { }

  getContacts(){

  	return [

  		{id:1, firstName: 'John', lastName: 'Doe', number: '5555-1231'},
  		{id:2, firstName: 'Jane', lastName: 'Doe', number: '5555-3213'}

  	];

  }

  /*getContacts():Array<Object>{

  	return contacts;
  }*/

  search(term){

  	this.searchData.next(term);
  }


  getSearchTerm() {

  	return this.searchData;

  }

}
