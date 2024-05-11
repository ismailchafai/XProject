import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxe38DetailListComponent } from './taxe-3-8-detail-list.Component';

describe('Taxe38DetailListComponent', () => {
  let component: Taxe38DetailListComponent;
  let fixture: ComponentFixture<Taxe38DetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taxe38DetailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Taxe38DetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
