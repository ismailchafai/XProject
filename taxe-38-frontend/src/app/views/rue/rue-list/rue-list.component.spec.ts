import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RueListComponent } from './rue-list.Component';

describe('RueListComponent', () => {
  let component: RueListComponent;
  let fixture: ComponentFixture<RueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RueListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
