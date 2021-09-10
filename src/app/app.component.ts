import { Component } from '@angular/core';
import {ModalDismissReasons, NgbDateParserFormatter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateParseCustomsFormaterService} from './service/ngb-date-parse-customs-formater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateParseCustomsFormaterService}
  ]
})
export class AppComponent {
  title = 'LuckStay';
}
