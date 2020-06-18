import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  title = '';
  constructor() { }

  ngOnInit() {
  }

  captureChange(option) {

    this.title = 'Hello received dropdwon change from child to child using template reference. here is the value  \n' + option;
  }

}
