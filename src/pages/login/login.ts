import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Resume } from '../resume/resume';
import { Loginservice } from '../../providers/loginservice';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public loginservice: Loginservice,public navCtrl: NavController, public navParams: NavParams) {

  }

  

login(username, password) {
    // Reset the content nav to have just this 
    console.log(username+" "+password);
    // we wouldn't want the back button to show in this scenario
    this.loginservice.setUsername(username);
    this.loginservice.setName("Pedro");
    this.loginservice.setLastname("Perez");
    this.navCtrl.setRoot(Resume);
  }
}
