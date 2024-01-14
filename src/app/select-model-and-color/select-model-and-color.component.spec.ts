import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModelAndColorComponent } from './select-model-and-color.component';

describe('SelectModelAndColorComponent', () => {
  let component: SelectModelAndColorComponent;
  let fixture: ComponentFixture<SelectModelAndColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModelAndColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModelAndColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
