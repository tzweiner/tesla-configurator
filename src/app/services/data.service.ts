import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel, Color } from '../models/car-model.model';
import { EMPTY, Observable, ReplaySubject } from 'rxjs';
import { Config, OptionsModel } from '../models/options-model.model';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SelectionsModel } from '../models/selections.model';
import { AppSettings } from '../app-settings';

export const optionsResolver: (
  route: ActivatedRouteSnapshot,
) => Observable<OptionsModel> = (route: ActivatedRouteSnapshot) => {
  return inject(DataService).getOptions(route?.paramMap?.get('modelCode'));
};

@Injectable()
export class DataService {
  private selectionsSubject: ReplaySubject<SelectionsModel> =
    new ReplaySubject<SelectionsModel>();
  public selections$ = this.selectionsSubject.asObservable();
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

  public getCarImage(): string {
    return `${AppSettings.IMAGES_URL}/${this.selections?.model?.code}/${this.selections.color?.code}.jpg`;
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

    this.triggerSelectionsSubjectEmit();
  }

  public setConfigTowWheelSelection(
    config?: Config | null | undefined,
    tow?: boolean,
    wheel?: boolean,
  ): void {
    this.selections.config = config;
    this.selections.tow = tow;
    this.selections.wheel = wheel;
    this.triggerSelectionsSubjectEmit();
  }

  public getSelections(): SelectionsModel {
    return this.selections;
  }

  public clearSelections(): void {
    this.selections = {};
    this.triggerSelectionsSubjectEmit();
  }

  public isModelColorPairSet(): boolean {
    return !!this.selections?.model && !!this.selections?.color;
  }

  public isConfigSet(): boolean {
    return (
      !!this.selections?.model &&
      !!this.selections?.color &&
      !!this.selections?.config
    );
  }

  public triggerSelectionsSubjectEmit() {
    this.selectionsSubject.next(this.selections);
  }
}
