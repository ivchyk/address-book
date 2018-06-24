import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushRecordComponent } from './push-record.component';

describe('PushRecordComponent', () => {
  let component: PushRecordComponent;
  let fixture: ComponentFixture<PushRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
