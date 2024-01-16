import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SelectionsModel } from '../models/selections.model';

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

  public showTowPrice(): boolean {
    return !!this.data.tow; // TODO
  }

  public showWheelPrice(): boolean {
    return !!this.data.wheel; // TODO
  }

  public getTotalCost(): number {
    return (this.data.config?.price ?? 0) + (this.data.color?.price ?? 0);
  }
}
