import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyteCustomElementsComponent } from './dyte-custom-elements.component';

describe('DyteCustomElementsComponent', () => {
  let component: DyteCustomElementsComponent;
  let fixture: ComponentFixture<DyteCustomElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyteCustomElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyteCustomElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
