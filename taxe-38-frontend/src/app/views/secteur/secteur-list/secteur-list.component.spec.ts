import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurListComponent } from './secteur-list.Component';

describe('SecteurListComponent', () => {
  let component: SecteurListComponent;
  let fixture: ComponentFixture<SecteurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecteurListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecteurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
