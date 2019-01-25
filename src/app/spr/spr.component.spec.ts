import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprComponent } from './spr.component';

describe('SprComponent', () => {
  let component: SprComponent;
  let fixture: ComponentFixture<SprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
