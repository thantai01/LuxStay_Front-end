import { Component, OnInit } from '@angular/core';
import {Notice} from '../../model/notice';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {
  page = 1;
  pageSize = 5;
  notices: Notice[];
  collectionSize;
  constructor(private notification: NotificationService) { }

  ngOnInit(): void {
    this.getAllNoticeOfUser(+sessionStorage.getItem('Id'));
  }
  refreshCountries() {
    this.notices = this.notices
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  getAllNoticeOfUser(userId) {
    this.notification.findAllOrderByUserId(userId).subscribe(notices => {
      this.notices = notices;
      this.collectionSize = this.notices.length;
    });
  }
}
