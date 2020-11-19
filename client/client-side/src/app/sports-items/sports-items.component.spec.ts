import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsItemsComponent } from './sports-items.component';

describe('SportsItemsComponent', () => {
  let component: SportsItemsComponent;
  let fixture: ComponentFixture<SportsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
