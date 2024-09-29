import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkeComponent } from './vke.component';

describe('VkeComponent', () => {
  let component: VkeComponent;
  let fixture: ComponentFixture<VkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
