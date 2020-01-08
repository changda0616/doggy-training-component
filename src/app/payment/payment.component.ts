import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Account } from './../interface/account';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnChanges{
  @Input() data: Account;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter<Account>();

  originalData: Account;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.data) {
      this.originalData = Object.assign({}, changes.data.currentValue);
    }
  }

}
