import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbtaComponent } from './mbta.component';

describe('MbtaComponent', () => {
  let component: MbtaComponent;
  let fixture: ComponentFixture<MbtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
