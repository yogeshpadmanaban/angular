import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { clientmoduleComponent } from './clientmodule.component';

describe('clientdataComponent', () => {
  let component: clientmoduleComponent;
  let fixture: ComponentFixture<clientmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ clientmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clientmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
