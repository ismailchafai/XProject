import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleListComponent } from './ville-list.Component';

describe('VilleListComponent', () => {
  let component: VilleListComponent;
  let fixture: ComponentFixture<VilleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
