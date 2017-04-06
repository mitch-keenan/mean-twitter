import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { ChirpService } from '../chirp.service';
import { ChirpListComponent } from './chirp-list.component';

describe('ChripListComponent', () => {
  let component: ChirpListComponent;
  let fixture: ComponentFixture<ChirpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ ChirpService ],
      declarations: [ ChirpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
