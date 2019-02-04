import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrrComponent } from './rrr.component';

describe('RrrComponent', () => {
  let component: RrrComponent;
  let fixture: ComponentFixture<RrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
