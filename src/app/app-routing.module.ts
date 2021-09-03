import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {UserComponent} from './page/user/user.component';
import {UserInfoComponent} from './block/user-info/user-info.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent},
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: ':id',
    component: UserComponent,
    children: [{
      path: 'profile',
      component: UserInfoComponent,
    }, {
      path: '',
      component: UserInfoComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
