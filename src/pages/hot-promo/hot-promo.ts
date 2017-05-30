import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

/*
  Generated class for the HotPromo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hot-promo',
  templateUrl: 'hot-promo.html'
})
export class HotPromoPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	goToProfile() {
		this.navCtrl.push(ProfilePage);
	}

}
