import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { ModelColorPairSelectedModel } from './models/model-color-pair-selected.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = 'Angular';

  constructor(private service: DataService) {}

  public getSelections(): ModelColorPairSelectedModel {
    return this.service.getModelColorPairSelection() || null;
  }
}
