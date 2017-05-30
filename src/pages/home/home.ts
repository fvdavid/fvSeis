import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-page1',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public nav: NavController) {
		this.nav = nav;
	}

	gotoLogin() {
    this.nav.push(LoginPage);
  }

  gotoRegister() {
   	this.nav.push(RegisterPage);
  }

}
