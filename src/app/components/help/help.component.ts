import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  name: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }
  appendMailTo(){
    this.name = this.name;
    this.message = this.message;
  }

}
