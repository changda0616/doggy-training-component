import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './../interface/account';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  get data(): Account {
    return this.originalData;
  }

  @Input('data')
  set data(value: Account) {
    this.originalData = Object.assign({}, value);
  }

  @Output() update = new EventEmitter<Account>();


  originalData: Account;

  constructor() { }

  ngOnInit() {
  }

}
