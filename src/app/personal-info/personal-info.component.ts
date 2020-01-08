import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../interface/account';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input() data: Account;
  constructor() { }

  ngOnInit() {
  }

}
