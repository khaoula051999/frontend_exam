import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinevirtuelleComponent } from './machinevirtuelle.component';

describe('MachinevirtuelleComponent', () => {
  let component: MachinevirtuelleComponent;
  let fixture: ComponentFixture<MachinevirtuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinevirtuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinevirtuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
