import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxButtonComponent } from './box-button.component';

describe('BoxButtonComponent', () => {
  let component: BoxButtonComponent;
  let fixture: ComponentFixture<BoxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
