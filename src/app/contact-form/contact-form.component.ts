import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model: Contact;

  constructor() { }

  ngOnInit() {
    let contactsList = JSON.parse(localStorage.getItem("contactsList"));
    if(contactsList) {
      this.model = new Contact(contactsList.id, contactsList.firstName, contactsList.lastName);      
    }
    else {
      this.model = new Contact("", "", "");
    }
  }

  save() {
    if(!this.model.id) {
      // editing an existing contact
    }
    else {
      // create a new contact
      this.model = new Contact("new id", this.model.firstName, this.model.lastName);      
    }
    localStorage.setItem("ContactsList", JSON.stringify(this.model));
  }

}
