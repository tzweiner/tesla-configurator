import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConfigAndOptionsComponent } from './select-config-and-options.component';
import { DisplayCarImageComponent } from '../display-car-image/display-car-image.component';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import {
  mockOptions2,
  mockSelection1,
  mockSelection2,
} from '../test/mock-data';
import { FormsModule } from '@angular/forms';
import createSpyObj = jasmine.createSpyObj;

describe('SelectConfigAndOptionsComponent', () => {
  let component: SelectConfigAndOptionsComponent;
  let fixture: ComponentFixture<SelectConfigAndOptionsComponent>;
  let dataServiceSpy: any;

  beforeEach(async () => {
    dataServiceSpy = createSpyObj(DataService.name, [
      'getSelections',
      'getOptions',
      'selections$',
      'triggerSelectionsSubjectEmit',
      'isModelColorPairSet',
    ]);
    dataServiceSpy.selections$ = of(mockSelection2);
    dataServiceSpy.getSelections.and.returnValue(mockSelection1);
    dataServiceSpy.getOptions.and.returnValue(mockOptions2);
    await TestBed.configureTestingModule({
      declarations: [SelectConfigAndOptionsComponent, DisplayCarImageComponent],
      providers: [
        { provide: DataService, useValue: dataServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: { data: of({ selection: { mockOptions2 } }) },
        },
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectConfigAndOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (done) => {
    component.data$.subscribe(() => {
      expect(component).toBeTruthy();
      done();
    });
  });
});
