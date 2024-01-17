import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModelAndColorComponent } from './select-model-and-color.component';
import { DisplayCarImageComponent } from '../display-car-image/display-car-image.component';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { mockSelection1 } from '../test/mock-data';
import createSpyObj = jasmine.createSpyObj;

class SpyObj<T> {
  getModels() {}
}

describe('SelectModelAndColorComponent', () => {
  let component: SelectModelAndColorComponent;
  let fixture: ComponentFixture<SelectModelAndColorComponent>;
  let dataServiceSpy: any;

  beforeEach(async () => {
    dataServiceSpy = createSpyObj(DataService.name, [
      'getSelections',
      'getOptions',
      'getModels',
      'selections$',
      'triggerSelectionsSubjectEmit',
      'isModelColorPairSet',
    ]);
    dataServiceSpy.selections$ = of(mockSelection1);
    dataServiceSpy.getModels.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [SelectModelAndColorComponent, DisplayCarImageComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectModelAndColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
