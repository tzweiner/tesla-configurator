import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { SelectionsModel } from '../models/selections.model';

@Component({
  selector: 'app-display-car-image',
  templateUrl: './display-car-image.component.html',
  styleUrl: './display-car-image.component.scss',
})
export class DisplayCarImageComponent implements OnInit {
  protected data$: Observable<SelectionsModel> =
    new Observable<SelectionsModel>();

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.data$ = this.service.selections$;
    setTimeout(() => {
      this.service.triggerSelectionsSubjectEmit();
    }, 0);
  }

  public getCarImage(): string {
    return this.service.getCarImage();
  }
}
