import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfilmComponent } from './detailfilm.component';

describe('DetailfilmComponent', () => {
  let component: DetailfilmComponent;
  let fixture: ComponentFixture<DetailfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailfilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
