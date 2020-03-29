import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedPartComponent } from './added-part.component';

describe('AddedPartComponent', () => {
  let component: AddedPartComponent;
  let fixture: ComponentFixture<AddedPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
