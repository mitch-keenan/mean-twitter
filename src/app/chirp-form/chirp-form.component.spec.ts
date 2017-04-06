import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpFormComponent } from './chirp-form.component';

describe('ChirpFormComponent', () => {
  let component: ChirpFormComponent;
  let fixture: ComponentFixture<ChirpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
