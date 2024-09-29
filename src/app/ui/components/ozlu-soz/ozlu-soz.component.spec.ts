import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzluSozComponent } from './ozlu-soz.component';

describe('OzluSozComponent', () => {
  let component: OzluSozComponent;
  let fixture: ComponentFixture<OzluSozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzluSozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzluSozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
