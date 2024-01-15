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
}
