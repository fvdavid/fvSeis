import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthData {

	public fireAuth: any;
  	public userProfile: any;

  	constructor() {
  		this.fireAuth = firebase.auth();
    	this.userProfile = firebase.database().ref('/optikHalunixUser');
  	}

  	loginUser(email: string, password: string): any {
  		return this.fireAuth.signInWithEmailAndPassword(email, password);
  	}

  	signupUser(email: string, password: string): any {
    	return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
	      	this.userProfile.child(newUser.uid).set({
	        	email: email
	      	});
    	});
  	}

  	resetPassword(email: string): any {
    	return this.fireAuth.sendPasswordResetEmail(email);
  	}

	logoutUser(): any {
    	return this.fireAuth.signOut();
  	}

}
