import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsItemsComponent } from './kids-items.component';

describe('KidsItemsComponent', () => {
  let component: KidsItemsComponent;
  let fixture: ComponentFixture<KidsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
