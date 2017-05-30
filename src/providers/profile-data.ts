import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the ProfileData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileData {


  public userProfile: any;
  public currentUser: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/optikHalunixUser');
  }

  getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }

  createProfile(firstName: string, lastName: string, 
    phoneNumber: string, address: string, birthDate: string,
    point: number): any {

    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
      birthDate: birthDate,
      point: point
    });
  }

  updateName(firstName: string, lastName: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName
    });
  }

  updatePhone(phoneNumber: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      phoneNumber: phoneNumber,
    });
  }

  updateDOB(birthDate: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  updateEmail(newEmail: string): any {
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }

  updatePoint(point: number): any {
    return this.userProfile.child(this.currentUser.uid).update({
      point: point,
    })
  }

  updatePassword(newPassword: string): any {
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password Changed");
    }, (error) => {
      console.log(error);
    });
  }

}
