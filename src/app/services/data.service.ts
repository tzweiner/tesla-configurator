import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from '../models/car-model.model';
import { Observable } from 'rxjs';
import { ModelColorPairSelectedModel } from '../models/model-color-pair-selected.model';

@Injectable()
export class DataService {
  private imagesUrl = 'https://interstate21.com/tesla-app/images/';
  private modelColorPairSelection: ModelColorPairSelectedModel;

  constructor(private http$: HttpClient) {}

  public getModels(): Observable<CarModel[]> {
    return this.http$.get<CarModel[]>('/models');
  }

  public getCarImage(imagePayload: ModelColorPairSelectedModel): string {
    return `${this.imagesUrl}/${imagePayload.modelCode}/${imagePayload.colorCode}.jpg`;
  }

  public setModelColorPairSelection(model: string, color: string): void {
    this.modelColorPairSelection = {
      modelCode: model,
      colorCode: color,
    };
  }

  public getModelColorPairSelection(): ModelColorPairSelectedModel {
    return this.modelColorPairSelection;
  }

  public clearModelColorPairSelection(): void {
    this.modelColorPairSelection = {};
  }
}
