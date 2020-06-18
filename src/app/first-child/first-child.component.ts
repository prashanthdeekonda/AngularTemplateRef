import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  options = ['option1', 'option2', 'option3', 'option4'];

  @Output() changeDropdown = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  changeDropdownOption(option) {
    this.changeDropdown.emit(option);
  }

}
