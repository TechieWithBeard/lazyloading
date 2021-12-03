import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLoadPageComponent } from './click-load-page.component';

describe('ClickLoadPageComponent', () => {
  let component: ClickLoadPageComponent;
  let fixture: ComponentFixture<ClickLoadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickLoadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
