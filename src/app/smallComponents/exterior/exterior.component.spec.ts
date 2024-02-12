import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorComponent } from './exterior.component';

describe('ExteriorComponent', () => {
  let component: ExteriorComponent;
  let fixture: ComponentFixture<ExteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExteriorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
