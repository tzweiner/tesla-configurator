import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from '../models/car-model.model';
import { Observable } from 'rxjs';
import { ImagePayloadModel } from '../models/image-payload.model';

@Injectable()
export class DataService {
  private imagesUrl = 'https://interstate21.com/tesla-app/images/';

  constructor(private http$: HttpClient) {}

  public getModels(): Observable<CarModel[]> {
    return this.http$.get<CarModel[]>('/models');
  }

  public getCarImage(imagePayload: ImagePayloadModel): string {
    return `${this.imagesUrl}/${imagePayload.modelCode}/${imagePayload.colorCode}.jpg`;
  }
}
