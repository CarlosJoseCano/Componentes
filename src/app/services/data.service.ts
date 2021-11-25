import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiFalseData, Componente} from '../interfaces/interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/data.json');
  }

  getDataToGrid(): Observable<ApiFalseData[]>{
    return this.http.get<ApiFalseData[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
