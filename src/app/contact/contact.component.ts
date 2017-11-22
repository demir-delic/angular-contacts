import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName: string;
  lastName: string;
  
  constructor() { }

  ngOnInit() {
      this.firstName = "Jane";
      this.lastName = "Doe";
  }

}
