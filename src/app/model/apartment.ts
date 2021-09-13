import {Apartmenttype} from "./apartmenttype";

export class Apartment {
  id?: number;
  name?: string;
  apartmentType?: Apartmenttype;
  bethRoom?: string;
  bathRoom?: string;
  description?: string;
  price?: any;
  status?: string;
  imageList?: any[];
  address?: string;
  city?: string;
  district?: string;
  ward?: string;
  user?: any;
}
