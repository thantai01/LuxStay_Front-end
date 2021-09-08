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
import { ApartmentCreateComponent } from './block/apartment-create/apartment-create.component';

import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {NewApartmentlistComponent} from './block/newest-apartments/new-apartmentlist.component';
import {ApartmentDetailComponent} from './block/apartment-detail/apartment-detail.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './block/side-nav/side-nav.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { ViewDetailComponent } from './page/view-detail/view-detail.component';
import { SearchComponent } from './page/search/search.component';


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
    ApartmentCreateComponent,
    NewApartmentlistComponent,
    ApartmentDetailComponent,
    SideNavComponent,
    ViewDetailComponent,
    SearchComponent,
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
        MatPaginatorModule,
        MatTableModule,
        ReactiveFormsModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MatSidenavModule,
        MatCheckboxModule,
        MatSelectModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
