import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from './services/data.service';
import { mockSelection1 } from './test/mock-data';
import createSpyObj = jasmine.createSpyObj;

describe('AppComponent', () => {
  let dataServiceSpy;

  beforeEach(async () => {
    dataServiceSpy = createSpyObj(DataService.name, [
      'getSelections',
      'isModelColorPairSet',
    ]);
    dataServiceSpy.isModelColorPairSet.and.returnValue(true);
    dataServiceSpy.getSelections.and.returnValue(of(mockSelection1));
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [AppComponent],
      providers: [
        { provide: DataService, useValue: dataServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { modelCode: 'C' } },
          },
        },
      ],
    }).compileComponents();

    dataServiceSpy.getSelections.and.returnValue(of([]));
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
