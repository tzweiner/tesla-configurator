import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from '../models/car-model.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http$: HttpClient) {}

  public getModels(): Observable<CarModel[]> {
    return this.http$.get<CarModel[]>('/models');
  }
}
