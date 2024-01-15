import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Config, OptionsModel } from '../models/options-model.model';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-select-config-and-options',
  templateUrl: './select-config-and-options.component.html',
  styleUrl: './select-config-and-options.component.scss',
})
export class SelectConfigAndOptionsComponent implements OnInit {
  public selectedConfig: Config;
  public checkboxHitch: FormControl = new FormControl<boolean>(false);
  public checkboxWheel: FormControl = new FormControl<boolean>(false);
  public data$: Observable<OptionsModel> = new Observable<OptionsModel>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data$ = this.route.data.pipe(
      tap((response) => console.log(response)),
      map((response) => response['selection']),
    );
  }

  public configSelected(): void {}
}
