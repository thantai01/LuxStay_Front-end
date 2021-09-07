import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './block/top-menu/top-menu.component';
import { HomeComponent } from './page/home/home.component';
import { CarouselComponent } from './block/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './page/user/user.component';
import { UserInfoComponent } from './block/user-info/user-info.component';
import { PersonalApartmentComponent } from './block/personal-apartment/personal-apartment.component';
import { UserApartmentComponent } from './block/user-apartment/user-apartment.component';
import { UserOrdersComponent } from './block/user-orders/user-orders.component';
import { UserHistoryComponent } from './block/user-history/user-history.component';
import { UserNotificationComponent } from './block/user-notification/user-notification.component';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { ApartmentListComponent } from './page/apartment-list/apartment-list.component';
import { NewApartmentlistComponent } from './block/new-apartmentlist/new-apartmentlist.component';
import { ApartmentCreateComponent } from './block/apartment-create/apartment-create.component';
import { ApartmentDetailComponent } from './block/apartment-detail/apartment-detail.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    CarouselComponent,
    UserComponent,
    UserInfoComponent,
    PersonalApartmentComponent,
    UserApartmentComponent,
    UserOrdersComponent,
    UserHistoryComponent,
    UserNotificationComponent,
    ApartmentListComponent,
    NewApartmentlistComponent,
    ApartmentCreateComponent,
    ApartmentDetailComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        MatInputModule,
        ReactiveFormsModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
