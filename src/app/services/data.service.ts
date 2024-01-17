import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel, Color } from '../models/car-model.model';
import { catchError, EMPTY, map, Observable, ReplaySubject } from 'rxjs';
import { Config, OptionsModel } from '../models/options-model.model';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SelectionsModel } from '../models/selections.model';
import { AppSettings } from '../app-settings';

export const optionsResolver: (
  route: ActivatedRouteSnapshot,
  router: Router,
) => Observable<OptionsModel> = (
  route: ActivatedRouteSnapshot,
  router: Router,
) => {
  return inject(DataService)
    .getOptions(route?.paramMap?.get('modelCode'))
    .pipe(
      map((response) => {
        if (!('configs' in response)) {
          router.navigate(['models']);
        }
        return response;
      }),
      catchError((error) => {
        router.navigate(['models']);
        return EMPTY;
      }),
    );
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

  public triggerSelectionsSubjectEmit(): void {
    this.selectionsSubject.next(this.selections);
  }

  public clearSelections(): void {
    this.selections = {};
    this.triggerSelectionsSubjectEmit();
  }

  public clearCofigAndTowhitchAndWheelSelections(): void {
    if (this.selections?.config) {
      this.selections.config = null;
    }
    if (this.selections?.tow) {
      this.selections.tow = undefined;
    }
    if (this.selections?.wheel) {
      this.selections.wheel = undefined;
    }
    this.triggerSelectionsSubjectEmit();
  }
}
