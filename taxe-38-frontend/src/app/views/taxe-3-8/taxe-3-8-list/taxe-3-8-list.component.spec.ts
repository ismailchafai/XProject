import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxe38ListComponent } from './taxe-3-8-list.Component';

describe('Taxe38ListComponent', () => {
  let component: Taxe38ListComponent;
  let fixture: ComponentFixture<Taxe38ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taxe38ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Taxe38ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
