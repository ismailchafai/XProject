import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierListComponent } from './quartier-list.Component';

describe('QuartierListComponent', () => {
  let component: QuartierListComponent;
  let fixture: ComponentFixture<QuartierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartierListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuartierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
