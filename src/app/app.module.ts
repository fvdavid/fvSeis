import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { CouponPage } from '../pages/coupon/coupon';
import { PointPage } from '../pages/point/point';
import { HotPromoPage } from '../pages/hot-promo/hot-promo';
import { ShopOnlinePage } from '../pages/shop-online/shop-online';
import { StoreLocationPage } from '../pages/store-location/store-location';
import { MembershipPage } from '../pages/membership/membership';
import { RedeemPointPage } from '../pages/redeem-point/redeem-point';

import { ProfilePage } from '../pages/profile/profile';

// providers
import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    CouponPage,
    PointPage,
    HotPromoPage,
    ShopOnlinePage,
    StoreLocationPage,
    ProfilePage,
    MembershipPage,
    RedeemPointPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    CouponPage,
    PointPage,
    HotPromoPage,
    ShopOnlinePage,
    StoreLocationPage,
    ProfilePage,
    MembershipPage,
    RedeemPointPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthData,
    ProfileData
  ]
})
export class AppModule {}
