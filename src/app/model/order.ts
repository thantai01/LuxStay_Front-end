import {User} from './user';
import {Apartment} from './apartment';


export class  Order {
  id?: any;
  startDate?: any;
  endDate?: any;
  orderStatus?: any;
  totalPaid?: any;
  rating?: any;
  comment?: any;
  checkin?: boolean;
  user?: any;
  apartment?: Apartment;
  userPhoneNums?: any;
  userFullName?: any;
}
