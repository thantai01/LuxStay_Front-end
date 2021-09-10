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
import {ApartmentCreateComponent} from './block/apartment-create/apartment-create.component';
import {ViewDetailComponent} from './page/view-detail/view-detail.component';
import {SearchComponent} from './page/search/search.component';
import {OrderComponent} from './block/order/order.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
  }, {
    path: 'user/:id',
    component: UserComponent,
    children: [{
      path: 'profile',
      redirectTo: '',
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
    }, {
      path: 'new-apartment',
      component: ApartmentCreateComponent,
    }]
  }, {
  path: 'apartments/:id/detail',
    component: ViewDetailComponent,
    children: [{
      path: 'order',
      component: OrderComponent
  }]
  }, {
  path: 'search',
    component: SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
