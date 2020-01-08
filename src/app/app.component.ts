import { Account } from './interface/account';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step = 0;
  originalData = {
    name: 'annoymouns',
    payment: null
  };
  account: Account = this.originalData;

  resetData() {
    this.step = 0;
    this.account = Object.assign({}, this.originalData);
  }
  updatedata(newData: Account) {
    this.step = 1;
    this.account = Object.assign({}, newData);
  }
  submitData(newData: Account) {
    this.step = 0;
    this.account = Object.assign(this.originalData, newData);
  }

}
