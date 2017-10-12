import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private contactsService:ContactsService) { 
  	this.contactsService = contactsService;
  }

  ngOnInit() {
  }

  handleSearch(search){
  	this.contactsService.search(search);

  }

}
