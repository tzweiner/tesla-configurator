import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, tap } from 'rxjs';
import { CarModel, Color } from '../models/car-model.model';

@Component({
  selector: 'app-select-model-and-color',
  templateUrl: './select-model-and-color.component.html',
  styleUrl: './select-model-and-color.component.scss',
})
export class SelectModelAndColorComponent implements OnInit {
  public models$: Observable<CarModel[]>;
  public colors: Color[] = [];
  public selectedModel: CarModel | null = null;
  public selectedColor: Color | null;
  private models: CarModel[];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.models$ = this.service.getModels().pipe(
      tap((response) => {
        this.models = response;
        this.initForm();
      }),
    );
  }

  public modelSelected(): void {
    if (!this.selectedModel) {
      this.service.clearSelections();
      this.colors = [];
      return;
    }
    this.colors = this.selectedModel?.colors || [];
    this.selectedColor = this.colors?.[0] ?? null;
    this.colorSelected();
  }

  public colorSelected(): void {
    this.service.setModelAndColorSelection(
      this.selectedModel ?? undefined,
      this.selectedColor ?? undefined,
    );
  }

  private initForm(): void {
    const currentSelections = this.service.getSelections();
    if (currentSelections.model && this.models) {
      this.selectedModel =
        this.models.find(
          (item) => item.code == currentSelections.model?.code,
        ) || null;

      this.colors = this.selectedModel?.colors || [];
      this.selectedColor =
        this.colors.find(
          (item) => item.code == currentSelections.color?.code,
        ) || null;
    }
  }

  private compareModelDescriptions = (a: CarModel, b: CarModel) => {
    const modelA = a.description;
    const modelB = b.description;
    if (modelA < modelB) return -1;
    if (modelA > modelB) return 1;
    return 0;
  };
}
