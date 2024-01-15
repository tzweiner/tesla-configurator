import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = 'Angular';

  constructor(private service: DataService) {}

  public getUrl(endpoint: string): string {
    if (this.service.isModelColorPairSet()) {
      const selections = this.service.getSelections();
      return `/${endpoint}/${selections.model?.code}`;
    }
    return `/${endpoint}`;
  }
}
