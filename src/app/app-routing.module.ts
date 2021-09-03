import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {UserComponent} from './page/user/user.component';
import {UserInfoComponent} from './block/user-info/user-info.component';
import {PersonalApartmentComponent} from './block/personal-apartment/personal-apartment.component';
import {UserApartmentComponent} from './block/user-apartment/user-apartment.component';
import {UserOrdersComponent} from './block/user-orders/user-orders.component';
import {UserHistoryComponent} from './block/user-history/user-history.component';
import {UserNotificationComponent} from './block/user-notification/user-notification.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent},
  {
    path: ':id',
    component: UserComponent,
    children: [{
      path: 'profile',
      component: UserInfoComponent,
    }, {
      path: '',
      component: UserInfoComponent,
    }, {
      path: 'for-rent',
      component: UserApartmentComponent,
    }, {
      path: 'orders',
      component: UserOrdersComponent,
    }, {
      path: 'histories',
      component: UserHistoryComponent,
    }, {
      path: 'notifications',
      component: UserNotificationComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
