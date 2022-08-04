import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetouristComponent } from './createtourist.component';

describe('CreatetouristComponent', () => {
  let component: CreatetouristComponent;
  let fixture: ComponentFixture<CreatetouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatetouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
