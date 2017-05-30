import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	public userProfile: any;
	  
	public birthDate: any;
	notifications: any[] = [];
  	days: any[];
	chosenHours: number = 6;
  	chosenMinutes: number = 5;
  	loading: any;

	constructor(public nav: NavController, public profileData: ProfileData, 
		public authData: AuthData, public alertCtrl: AlertController,
		public loadingCtrl: LoadingController ) {

	    this.profileData.getUserProfile().on('value', (data) => {
	      this.userProfile = data.val();
	      this.birthDate = this.userProfile.birthDate;
	    });
	}

	logOut() {
		this.authData.logoutUser().then(() => {
			this.loading = this.loadingCtrl.create({
	        	content: 'Silahkan tunggu...',
		    });
		    this.loading.present();

		    setTimeout(() => {
		    	this.nav.setRoot(HomePage);
		    });

		    setTimeout(() => {
		    	this.loading.dismiss();
		    }, 5000);
	    });
	}

	updateName(){
		let alert = this.alertCtrl.create({
	      message: "Your first name & last name",
	      inputs: [
	        {
	          name: 'firstName',
	          placeholder: 'Your first name',
	          // value: this.userProfile.firstName
	        },
	        {
	          name: 'lastName',
	          placeholder: 'Your last name',
	          // value: this.userProfile.lastName
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	        },
	        {
	          text: 'Save',
	          handler: data => {
	            this.profileData.updateName(data.firstName, data.lastName);
	          }
	        }
	      ]
	    });
	    alert.present();
	}

	updatePhone() {
		let alert = this.alertCtrl.create({
	      message: "Your Phone Number",
	      inputs: [
	        {
	          name: 'phoneNumber',
	          placeholder: '0852-xxxx-xxxx',
	          // value: this.userProfile.phoneNumber
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	        },
	        {
	          text: 'Save',
	          handler: data => {
	            this.profileData.updatePhone(data.phoneNumber);
	          }
	        }
	      ]
	    });
	    alert.present();
	}

	updateDOB(birthDate){
		this.profileData.updateDOB(birthDate);

		let today = new Date();
	    let birthdayDate = new Date(birthDate);

	    if(today.getMonth() == birthdayDate.getMonth()) {

	    	if(today.getDate() == birthdayDate.getDate()) {
	        	let firstNotificationTime = new Date();
	        	firstNotificationTime.setHours(this.chosenHours);
	        	firstNotificationTime.setMinutes(this.chosenMinutes);

	        	let notification = {
	          		title: 'Hey!',
	          		text: 'Happy BirthDay ' + this.userProfile.firstName + ' ' + this.userProfile.lastName + ' :-) ',
	          		at: firstNotificationTime
	        	};

	        	this.notifications.push(notification);

	        	console.log("Notifications to be scheduled: ", this.notifications);
	      	}
	    }
	}

	updateEmail(){
		let alert = this.alertCtrl.create({
	      inputs: [
	        {
	          name: 'newEmail',
	          placeholder: 'Your new email',
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	        },
	        {
	          text: 'Save',
	          handler: data => {
	            this.profileData.updateEmail(data.newEmail);
	          }
	        }
	      ]
	    });
	    alert.present();
	}

	updatePassword(){
		let alert = this.alertCtrl.create({
	      inputs: [
	        {
	          name: 'newPassword',
	          placeholder: 'Your new password',
	          type: 'password'
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	        },
	        {
	          text: 'Save',
	          handler: data => {
	            this.profileData.updatePassword(data.newPassword);
	          }
	        }
	      ]
	    });
	    alert.present();
	}

}
