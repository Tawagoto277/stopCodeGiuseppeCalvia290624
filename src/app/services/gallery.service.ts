import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../models/albums';
import { Photos } from '../models/photos';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http : HttpClient) { }

  getAlbumsList(): Observable<Albums>{
    return this.http.get<Albums>(environment.API_BASE_URL + '/albums');
  }

  getAlbumById(id : string): Observable<Photos>{
    return this.http.get<Photos>('https://jsonplaceholder.typicode.com/photos?albumId=' + id);
  }
}
