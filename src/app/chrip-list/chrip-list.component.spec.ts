import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChripListComponent } from './chrip-list.component';

describe('ChripListComponent', () => {
  let component: ChripListComponent;
  let fixture: ComponentFixture<ChripListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChripListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
