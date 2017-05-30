import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { HotPromoPage } from '../pages/hot-promo/hot-promo';
import { MembershipPage } from '../pages/membership/membership';
import { ShopOnlinePage } from '../pages/shop-online/shop-online';
import { StoreLocationPage } from '../pages/store-location/store-location';
import { RedeemPointPage } from '../pages/redeem-point/redeem-point';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  zone: NgZone;

  public userLogin: any;
  public userProfile: any;
  public profile: any;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {

    this.zone = new NgZone({});

    firebase.initializeApp({
      apiKey: "AIzaSyCSNHNDlmeskJWYFz4ZggAUCcry14PuIIs",
      authDomain: "fvhalunix-8c6f8.firebaseapp.com",
      databaseURL: "https://fvhalunix-8c6f8.firebaseio.com",
      storageBucket: "fvhalunix-8c6f8.appspot.com",
      messagingSenderId: "709725748998"
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = HomePage;

          this.pages = [
            { title: 'Login', component: LoginPage },
            { title: 'Register', component: RegisterPage }
          ];

        } else { 
          this.rootPage = HotPromoPage;
          this.pages = [
            { title: 'Hot Promo', component: HotPromoPage },
            { title: 'Membership', component: MembershipPage },
            { title: 'Shop Online', component: ShopOnlinePage },
            { title: 'Store Location', component: StoreLocationPage },
            { title: 'Redeem Point', component: RedeemPointPage }
          ];
          this.userProfile = firebase.database().ref('/optikHalunixUser').child(user.uid).on('value', (data) => {
            this.profile = data.val();
          });
        }
      });

      this.userLogin = user;
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
