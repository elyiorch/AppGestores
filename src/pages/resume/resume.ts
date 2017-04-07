import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html'
})
export class Resume {

  constructor(public navCtrl: NavController) {
    console.log("entre en el resume");
  }

}
