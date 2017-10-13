
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactsService} from '../../../services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id: number;
  //private sub: any;
  contact: Object;
  contacts:Array<Object>

  constructor(private route: ActivatedRoute, private contactsService:ContactsService) {

  	this.contacts = contactsService.getContacts();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.contacts.forEach(cont =>{
       		if(cont['id'] == this.id ){
       			this.contact = cont;
       	}
       })
       
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

	

}


/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact:Object;

  constructor(private contactService:ContactsService,
              private route:ActivatedRoute
  ) {
    route.params.subscribe(params => {
      contactService.getContacts().forEach(contact => {
        if (contact['id'] == params.id) {
          this.contact = contact
        }
      })
    });
  }

  ngOnInit() {
  }

}

*/