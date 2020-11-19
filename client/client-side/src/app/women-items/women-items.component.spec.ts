import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenItemsComponent } from './women-items.component';

describe('WomenItemsComponent', () => {
  let component: WomenItemsComponent;
  let fixture: ComponentFixture<WomenItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
