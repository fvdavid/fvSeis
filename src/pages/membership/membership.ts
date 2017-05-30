import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

/*
  Generated class for the Membership page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-membership',
  templateUrl: 'membership.html'
})
export class MembershipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToProfile() {
  	this.navCtrl.push(ProfilePage);
  }

}
