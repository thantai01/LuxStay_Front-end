import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../model/image';
const API_URL = `${environment.API_SERVER}`;
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(API_URL + '/images');
  }

  saveImage(image): Observable<Image> {
    return this.http.post<Image>(API_URL + '/images', image);
  }

  findById(id: number): Observable<Image> {
    return this.http.get<Image>(`${API_URL}/images/${id}`);
  }
}
