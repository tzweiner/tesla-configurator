import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCarImageComponent } from './display-car-image.component';

describe('DisplayCarImageComponent', () => {
  let component: DisplayCarImageComponent;
  let fixture: ComponentFixture<DisplayCarImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayCarImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayCarImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
