import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CouponPage } from '../coupon/coupon';
import { PointPage } from '../point/point';
import { HotPromoPage } from '../hot-promo/hot-promo';
import { ShopOnlinePage } from '../shop-online/shop-online';
import { StoreLocationPage } from '../store-location/store-location';
import { ProfilePage } from '../profile/profile';

import { ProfileData } from '../../providers/profile-data';

@Component({
  selector: 'page-page2',
  templateUrl: 'menu.html'
})
export class MenuPage {

  public userProfile: any;

  constructor(public nav: NavController, public profile: ProfileData) {

    this.profile.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      // this.birthDate = this.userProfile.birthDate;
    });

  }

  goToProfile() {
    this.nav.push(ProfilePage);
  }

  gotoHotPromo() {
    this.nav.push(HotPromoPage);
  }

  gotoCoupons() {
    this.nav.push(CouponPage);
  }

  gotoStoreLocation() {
    this.nav.push(StoreLocationPage);
  }

  gotoShopOnline() {
    this.nav.push(ShopOnlinePage);
  }

  gotoPoints() {
    this.nav.push(PointPage);
  }

  gotoFacebook() {
    this.nav.push('www.facebook.com');
  }
}
