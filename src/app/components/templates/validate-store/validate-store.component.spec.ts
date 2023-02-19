import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateStoreComponent } from './validate-store.component';

describe('ValidateStoreComponent', () => {
  let component: ValidateStoreComponent;
  let fixture: ComponentFixture<ValidateStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
