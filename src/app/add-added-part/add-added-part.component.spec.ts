import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddedPartComponent } from './add-added-part.component';

describe('AddAddedPartComponent', () => {
  let component: AddAddedPartComponent;
  let fixture: ComponentFixture<AddAddedPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddedPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddedPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
