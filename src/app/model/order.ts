import {User} from "./user";
import {Apartment} from "./apartment";

export class  Order {
  startDate?: any;
  endDate?: any;
  orderStatus?: any;
  totalPaid?: any;
  rating?: any;
  comment?: any;
  checkin?: boolean;
  user?: User;
  apartmemt?: Apartment;
}
