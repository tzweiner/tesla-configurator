import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import SpyObj = jasmine.SpyObj;
import createSpyObj = jasmine.createSpyObj;

describe('DataService', () => {
  let service: DataService;
  let httpSpy: SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = createSpyObj(HttpClient.name, ['get']);
    TestBed.configureTestingModule({
      providers: [DataService, { provide: HttpClient, useValue: httpSpy }],
    });
    httpSpy.get.and.returnValue(of());
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
