import { Account } from './interface/account';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step = 0;
  title = 'doggy-training-component';
  oriData = {
    name: 'annoymouns',
    payment: null
  };
  account: Account = this.oriData;

  resetData() {
    this.step = 0;
    this.account = this.oriData;
  }

  updateData() {

  }

}
