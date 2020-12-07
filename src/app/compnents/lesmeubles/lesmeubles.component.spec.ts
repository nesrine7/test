import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesmeublesComponent } from './lesmeubles.component';

describe('LesmeublesComponent', () => {
  let component: LesmeublesComponent;
  let fixture: ComponentFixture<LesmeublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesmeublesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesmeublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
