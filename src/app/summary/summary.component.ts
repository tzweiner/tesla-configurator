import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SelectionsModel } from '../models/selections.model';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  public data: SelectionsModel;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.data = this.service.getSelections();
  }

  public calculateColorPrice(): number {
    return this.data.color?.price ?? 0;
  }

  public showColorPrice(): boolean {
    return !!this.data.color?.price;
  }

  public getTotalCost(): number {
    return (
      (this.data.config?.price ?? 0) +
      (this.data.color?.price ?? 0) +
      (this.data.tow ? AppSettings.DEFAULT_TOWHITCH_PRICE : 0) +
      (this.data.wheel ? AppSettings.DEFAULT_WHEEL_PRICE : 0)
    );
  }

  public getTowPrice(): number {
    return AppSettings.DEFAULT_TOWHITCH_PRICE;
  }

  public getWheelPrice(): number {
    return AppSettings.DEFAULT_WHEEL_PRICE;
  }
}
