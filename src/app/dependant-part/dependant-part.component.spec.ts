import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantPartComponent } from './dependant-part.component';

describe('DependantPartComponent', () => {
  let component: DependantPartComponent;
  let fixture: ComponentFixture<DependantPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependantPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependantPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
