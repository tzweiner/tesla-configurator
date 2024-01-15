import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from '../models/car-model.model';
import { EMPTY, Observable } from 'rxjs';
import { ModelColorPairSelectedModel } from '../models/model-color-pair-selected.model';
import { OptionsModel } from '../models/options-model.model';
import { ActivatedRouteSnapshot } from '@angular/router';

export const summaryResolver: (
  route: ActivatedRouteSnapshot,
) => Observable<OptionsModel> = (route: ActivatedRouteSnapshot) => {
  console.log('route.paramMap', route.paramMap.get('modelCode'));
  return inject(DataService).getOptions(route?.paramMap?.get('modelCode'));
};

@Injectable()
export class DataService {
  private imagesUrl = 'https://interstate21.com/tesla-app/images/';
  private modelColorPairSelection: ModelColorPairSelectedModel;

  constructor(private http$: HttpClient) {}

  public getOptions(
    code?: string | null | undefined,
  ): Observable<OptionsModel> {
    if (!code) {
      return EMPTY;
    }
    return this.http$.get<OptionsModel>('/options/' + code);
  }

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
    return this.modelColorPairSelection || null;
  }

  public clearModelColorPairSelection(): void {
    this.modelColorPairSelection = {};
  }
}
