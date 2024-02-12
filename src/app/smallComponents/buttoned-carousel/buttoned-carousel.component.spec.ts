import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonedCarouselComponent } from './buttoned-carousel.component';

describe('ButtonedCarouselComponent', () => {
  let component: ButtonedCarouselComponent;
  let fixture: ComponentFixture<ButtonedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonedCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
