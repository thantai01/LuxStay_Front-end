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
import {NewApartmentlistComponent} from './block/new-apartmentlist/new-apartmentlist.component';
import {ApartmentCreateComponent} from './block/apartment-create/apartment-create.component';
import {ApartmentDetailComponent} from './block/apartment-detail/apartment-detail.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent},
  {
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
      path: 'apartment-create',
      component: ApartmentCreateComponent
    }]
  }, {
  path: 'list',
    component: NewApartmentlistComponent
  }, {
    path: 'apartment-detail/:id',
    component: ApartmentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
