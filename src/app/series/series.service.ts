import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './serie';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  } 

}
