import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChripMainComponent } from './chrip-main.component';

describe('ChripMainComponent', () => {
  let component: ChripMainComponent;
  let fixture: ComponentFixture<ChripMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChripMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChripMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
