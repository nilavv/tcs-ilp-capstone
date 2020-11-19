import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenItemsComponent } from './men-items.component';

describe('MenItemsComponent', () => {
  let component: MenItemsComponent;
  let fixture: ComponentFixture<MenItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
