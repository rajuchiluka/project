import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetail } from './detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private _url = '/assets/data/details.json';

  constructor(private http: HttpClient) { }
  getdetails(): Observable<IDetail[]>  {
    return this.http.get<IDetail[]>(this._url);
  }

}
