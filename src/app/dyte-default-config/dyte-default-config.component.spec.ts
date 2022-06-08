import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyteDefaultConfigComponent } from './dyte-default-config.component';

describe('DyteDefaultConfigComponent', () => {
  let component: DyteDefaultConfigComponent;
  let fixture: ComponentFixture<DyteDefaultConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyteDefaultConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyteDefaultConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
