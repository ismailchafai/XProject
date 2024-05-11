import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locale38DetailListComponent } from './locale-3-8-detail-list.Component';

describe('Locale38DetailListComponent', () => {
  let component: Locale38DetailListComponent;
  let fixture: ComponentFixture<Locale38DetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Locale38DetailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Locale38DetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
