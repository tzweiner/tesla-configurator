import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel, Color } from '../models/car-model.model';
import { EMPTY, Observable, Subject } from 'rxjs';
import { ModelColorPairSelectedModel } from '../models/model-color-pair-selected.model';
import { Config, OptionsModel } from '../models/options-model.model';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SelectionsModel } from '../models/selections.model';

export const summaryResolver: (
  route: ActivatedRouteSnapshot,
) => Observable<OptionsModel> = (route: ActivatedRouteSnapshot) => {
  return inject(DataService).getOptions(route?.paramMap?.get('modelCode'));
};

@Injectable()
export class DataService {
  private selectionsSubject: Subject<SelectionsModel> =
    new Subject<SelectionsModel>();
  public selections$ = this.selectionsSubject.asObservable();
  private imagesUrl = 'https://interstate21.com/tesla-app/images/';
  private selections: SelectionsModel = {};

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

  public setModelAndColorSelection(model?: CarModel, color?: Color): void {
    if (!this.selections) {
      this.selections = {
        model: model,
        color: color,
      };
    } else {
      this.selections.model = model;
      this.selections.color = color;
    }

    this.selectionsSubject.next(this.selections);
  }

  public setConfigTowWheelSelection(
    config?: Config,
    tow?: boolean,
    wheel?: boolean,
  ): void {
    this.selections.config = config;
    this.selections.tow = tow;
    this.selections.wheel = wheel;
    this.selectionsSubject.next(this.selections);
  }

  public getSelections(): SelectionsModel {
    return this.selections;
  }

  public clearSelections(): void {
    this.selections = {};
  }

  public isModelColorPairSet(): boolean {
    return !!this.selections?.model && !!this.selections?.color;
  }

  public triggerSelectionsSubjectEmit() {
    this.selectionsSubject.next(this.selections);
  }
}
