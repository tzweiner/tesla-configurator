import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { CarModel, Color } from '../models/car-model.model';
import { ModelColorPairSelectedModel } from '../models/model-color-pair-selected.model';

@Component({
  selector: 'app-select-model-and-color',
  templateUrl: './select-model-and-color.component.html',
  styleUrl: './select-model-and-color.component.scss',
})
export class SelectModelAndColorComponent implements OnInit {
  public models$: Observable<CarModel[]>;
  public colors: Color[] = [];
  public selectedModel: CarModel | null = null;
  public selectedColor: Color;
  public imageUrl: string;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.models$ = this.service.getModels();
  }

  public modelSelected(): void {
    if (!this.selectedModel) {
      this.service.clearModelColorPairSelection();
      this.colors = [];
      return;
    }
    this.colors = this.selectedModel?.colors || [];
    this.selectedColor = this.colors?.[0] ?? null;
    this.colorSelected();
  }

  public colorSelected(): void {
    this.imageUrl = this.getCarImage();
    this.service.setModelColorPairSelection(
      this.selectedModel ? this.selectedModel.code : '',
      this.selectedColor ? this.selectedColor.code : '',
    );
  }

  public getCarImage(): string {
    if (!this.selectedColor || !this.selectedModel) {
      return '';
    }
    const image: ModelColorPairSelectedModel = {
      modelCode: this.selectedModel.code,
      colorCode: this.selectedColor.code,
    };
    return this.service.getCarImage(image);
  }

  private compareModelDescriptions = (a: CarModel, b: CarModel) => {
    const modelA = a.description;
    const modelB = b.description;
    if (modelA < modelB) return -1;
    if (modelA > modelB) return 1;
    return 0;
  };
}
