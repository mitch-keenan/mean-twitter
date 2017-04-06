import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChirpService } from '../chirp.service';
import { ChirpFormComponent } from './chirp-form.component';
import { CountdownPipe } from '../countdown.pipe';

describe('ChirpFormComponent', () => {
  let component: ChirpFormComponent;
  let fixture: ComponentFixture<ChirpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpFormComponent, CountdownPipe ],
      imports: [ FormsModule, HttpModule ],
      providers: [ ChirpService ]
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
