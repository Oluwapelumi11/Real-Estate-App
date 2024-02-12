import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladeComponent } from './accolade.component';

describe('AccoladeComponent', () => {
  let component: AccoladeComponent;
  let fixture: ComponentFixture<AccoladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
