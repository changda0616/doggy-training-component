import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './../interface/account';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input() data: Account;
  @Output() nextStep = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
