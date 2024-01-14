import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { CarModel, Color } from '../models/car-model.model';
import { ImagePayloadModel } from '../models/image-payload.model';

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
    this.colors = this.selectedModel?.colors || [];
    this.selectedColor = this.colors?.[0] ?? null;
    this.colorSelected();
  }

  public colorSelected(): void {
    this.imageUrl = this.getCarImage();
  }

  public getCarImage(): string {
    if (!this.selectedColor || !this.selectedModel) {
      return '';
    }
    const image: ImagePayloadModel = {
      modelCode: this.selectedModel.code,
      colorCode: this.selectedColor.code,
    };
    console.log('image url', this.service.getCarImage(image));
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
