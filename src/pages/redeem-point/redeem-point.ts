import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { ProfileData } from '../../providers/profile-data';
import { ProfilePage } from '../profile/profile';

/*
  Generated class for the RedeemPoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-redeem-point',
  templateUrl: 'redeem-point.html'
})
export class RedeemPointPage {

	loader: any;

	public userProfile: any;

	hasilA: any;
	point: number;
	barangA: number = 100;
	barangB: number = 200;
	barangC: number = 300;

	constructor(public navCtrl: NavController, public navParams: NavParams, 
		public alerCtrl: AlertController, public profileData: ProfileData,
		public loadingControl: LoadingController) {

		this.profileData.getUserProfile().on('value', (data) => {
	      this.userProfile = data.val();
	    });
	}

	showLoading() {
		this.loader = this.loadingControl.create({
			content: 'tunggu sebentar...'
		});
		this.loader.present();
		setTimeout(() => {
        	this.loader.dismiss();
      	}, 5000);
	}

	doConfirm1() {
		let confirm = this.alerCtrl.create({
			title: 'confirmasi!',
			message: 'Apakah anda ingin menukar point anda?',

			
			buttons: [
				{
					text: 'Batal',
					handler: () => {
						console.log('batal');
					}
				},
				{
					text: 'Tukar',
					handler: () => {
						this.profileData.updatePoint(this.userProfile.point -= this.barangA);

						let okmessage = this.alerCtrl.create({
							title: 'sukses',
							message: 'Selamat, anda telah sukses redeem point anda, Screenshot notifikasi anda sekarang dan tukarkan dalam waktu 3 hari maksimal.',
							buttons: [
								{
									text: 'Ok',
									handler: () => {
										console.log('berhasil menukar');
									}
								}
							]
						});
						this.showLoading();
						okmessage.present();
					}
				}
			]
		});
		confirm.present();
	}

	doConfirm2() {
		let confirm = this.alerCtrl.create({
			title: 'confirmasi!',
			message: 'Apakah anda ingin menukar point anda?',

			
			buttons: [
				{
					text: 'Batal',
					handler: () => {
						console.log('batal');
					}
				},
				{
					text: 'Tukar',
					handler: () => {
						this.profileData.updatePoint(this.userProfile.point -= this.barangB);

						let okmessage = this.alerCtrl.create({
							title: 'sukses',
							message: 'Selamat, anda telah sukses redeem point anda, Screenshot notifikasi anda sekarang dan tukarkan dalam waktu 3 hari maksimal.',
							buttons: [
								{
									text: 'Ok',
									handler: () => {
										console.log('berhasil menukar');
									}
								}
							]
						});
						this.showLoading();
						okmessage.present();
					}
				}
			]
		});
		confirm.present();
	}

	doConfirm3() {
		let confirm = this.alerCtrl.create({
			title: 'confirmasi!',
			message: 'Apakah anda ingin menukar point anda?',

			
			buttons: [
				{
					text: 'Batal',
					handler: () => {
						console.log('batal');
					}
				},
				{
					text: 'Tukar',
					handler: () => {
						this.profileData.updatePoint(this.userProfile.point -= this.barangC);

						let okmessage = this.alerCtrl.create({
							title: 'sukses',
							message: 'Selamat, anda telah sukses redeem point anda, Screenshot notifikasi anda sekarang dan tukarkan dalam waktu 3 hari maksimal.',
							buttons: [
								{
									text: 'Ok',
									handler: () => {
										console.log('berhasil menukar');
									}
								}
							]
						});
						this.showLoading();
						okmessage.present();
					}
				}
			]
		});
		confirm.present();
	}

	goToProfile() {
		this.navCtrl.push(ProfilePage);
	}
}
