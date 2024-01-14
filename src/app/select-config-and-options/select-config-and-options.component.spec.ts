import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConfigAndOptionsComponent } from './select-config-and-options.component';

describe('SelectConfigAndOptionsComponent', () => {
  let component: SelectConfigAndOptionsComponent;
  let fixture: ComponentFixture<SelectConfigAndOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectConfigAndOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectConfigAndOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
