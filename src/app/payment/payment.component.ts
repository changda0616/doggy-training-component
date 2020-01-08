import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './../interface/account';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() data: Account;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
