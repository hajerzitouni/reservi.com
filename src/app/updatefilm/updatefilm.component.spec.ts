import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefilmComponent } from './updatefilm.component';

describe('UpdatefilmComponent', () => {
  let component: UpdatefilmComponent;
  let fixture: ComponentFixture<UpdatefilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
