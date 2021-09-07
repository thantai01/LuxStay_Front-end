import {Apartmenttype} from './apartmenttype';
import {Image} from './image';

export interface ApartmentHouse {
  id?: number;
  name?: string;
  apartmentType?: Apartmenttype;
  bethRoom?: string;
  bathRoom?: string;
  description?: string;
  price?: number;
  status?: string;
  imageList?: Image[];
  address?: string;
  city?: string;
  district?: string;
  ward?: string;
}
