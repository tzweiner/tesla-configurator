import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, OptionsModel } from '../models/options-model.model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-select-config-and-options',
  templateUrl: './select-config-and-options.component.html',
  styleUrl: './select-config-and-options.component.scss',
})
export class SelectConfigAndOptionsComponent implements OnInit {
  public selectedConfig: Config;
  public checkboxTow: FormControl = new FormControl<boolean>(false);
  public checkboxWheel: FormControl = new FormControl<boolean>(false);
  public data$: Observable<OptionsModel> = new Observable<OptionsModel>();

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.data.pipe(map((response) => response['selection']));
  }

  public configSelected(): void {
    this.service.setConfigTowWheelSelection(this.selectedConfig);
  }

  public towSelected(): void {
    this.service.setConfigTowWheelSelection(this.checkboxTow.value);
  }

  public wheelSelected(): void {
    this.service.setConfigTowWheelSelection(this.checkboxWheel.value);
  }
}
