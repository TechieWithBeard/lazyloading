import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClickLoadPageComponent } from './dynamic-click-load-page.component';

describe('DynamicClickLoadPageComponent', () => {
  let component: DynamicClickLoadPageComponent;
  let fixture: ComponentFixture<DynamicClickLoadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicClickLoadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicClickLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
