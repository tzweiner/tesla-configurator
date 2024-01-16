import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, OptionsModel } from '../models/options-model.model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-select-config-and-options',
  templateUrl: './select-config-and-options.component.html',
  styleUrl: './select-config-and-options.component.scss',
})
export class SelectConfigAndOptionsComponent implements OnInit {
  public selectedConfig: Config | null | undefined = null;
  public checkboxTow: FormControl = new FormControl<boolean>(false);
  public checkboxWheel: FormControl = new FormControl<boolean>(false);
  public data$: Observable<OptionsModel> = new Observable<OptionsModel>();
  private configs: Config[];

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.data.pipe(
      tap((response) => {
        this.configs = response['selection'].configs;
        this.initForm();
      }),
      map((response) => response['selection']),
    );
  }

  public configSelected(): void {
    this.checkboxTow.setValue(false);
    this.checkboxWheel.setValue(false);
    this.service.setConfigTowWheelSelection(
      this.selectedConfig,
      this.checkboxTow.value,
      this.checkboxWheel.value,
    );
  }

  public towSelected(): void {
    this.service.setConfigTowWheelSelection(
      this.selectedConfig,
      this.checkboxTow.value,
      this.checkboxWheel.value,
    );
  }

  public wheelSelected(): void {
    this.service.setConfigTowWheelSelection(
      this.selectedConfig,
      this.checkboxTow.value,
      this.checkboxWheel.value,
    );
  }

  private initForm(): void {
    const currentSelections = this.service.getSelections();
    if (currentSelections.config && this.configs) {
      this.selectedConfig = this.configs.find(
        (item) => item.id == currentSelections.config?.id,
      );
    }
    if (currentSelections.tow) {
      this.checkboxTow.setValue(currentSelections.tow);
    }
    if (currentSelections.wheel) {
      this.checkboxWheel.setValue(currentSelections.wheel);
    }
  }
}
