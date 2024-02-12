import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertListingsComponent } from './propert-listings.component';

describe('PropertListingsComponent', () => {
  let component: PropertListingsComponent;
  let fixture: ComponentFixture<PropertListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
