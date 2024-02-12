import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimentionsComponent } from './dimentions.component';

describe('DimentionsComponent', () => {
  let component: DimentionsComponent;
  let fixture: ComponentFixture<DimentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimentionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DimentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
