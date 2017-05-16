import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceManagerComponent } from './instance-manager.component';

describe('InstanceManagerComponent', () => {
  let component: InstanceManagerComponent;
  let fixture: ComponentFixture<InstanceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
