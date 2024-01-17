import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarImageComponent } from './display-car-image.component';
import { of } from 'rxjs';
import { DataService } from '../services/data.service';
import { mockSelection1, mockSelection2 } from '../test/mock-data';
import createSpyObj = jasmine.createSpyObj;

describe('DisplayCarImageComponent', () => {
  let component: DisplayCarImageComponent;
  let fixture: ComponentFixture<DisplayCarImageComponent>;
  let dataServiceSpy: any;

  beforeEach(async () => {
    dataServiceSpy = createSpyObj(DataService.name, [
      'getSelections',
      'isModelColorPairSet',
      'triggerSelectionsSubjectEmit',
    ]);
    await TestBed.configureTestingModule({
      declarations: [DisplayCarImageComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    }).compileComponents();
    dataServiceSpy.getSelections.and.returnValue(mockSelection2);
    dataServiceSpy.selections$ = of(mockSelection1);

    fixture = TestBed.createComponent(DisplayCarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (done) => {
    dataServiceSpy.selections$.subscribe(() => {
      expect(component).toBeTruthy();
      done();
    });
  });
});
