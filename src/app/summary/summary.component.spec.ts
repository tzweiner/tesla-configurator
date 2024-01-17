import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { DataService } from '../services/data.service';
import { DisplayCarImageComponent } from '../display-car-image/display-car-image.component';
import { of } from 'rxjs';
import { mockSelection2 } from '../test/mock-data';
import createSpyObj = jasmine.createSpyObj;

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let dataServiceSpy: any;

  beforeEach(async () => {
    dataServiceSpy = createSpyObj(DataService.name, [
      'getSelections',
      'selections$',
      'triggerSelectionsSubjectEmit',
      'isModelColorPairSet',
    ]);
    dataServiceSpy.selections$ = of(mockSelection2);
    await TestBed.configureTestingModule({
      declarations: [SummaryComponent, DisplayCarImageComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    }).compileComponents();

    dataServiceSpy.getSelections.and.returnValue(of([]));

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
