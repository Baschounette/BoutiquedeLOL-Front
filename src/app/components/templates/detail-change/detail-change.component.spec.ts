import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChangeComponent } from './detail-change.component';

describe('DetailChangeComponent', () => {
  let component: DetailChangeComponent;
  let fixture: ComponentFixture<DetailChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
