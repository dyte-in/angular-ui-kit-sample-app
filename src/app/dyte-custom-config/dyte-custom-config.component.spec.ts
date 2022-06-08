import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyteCustomConfigComponent } from './dyte-custom-config.component';

describe('DyteCustomConfigComponent', () => {
  let component: DyteCustomConfigComponent;
  let fixture: ComponentFixture<DyteCustomConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyteCustomConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyteCustomConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
