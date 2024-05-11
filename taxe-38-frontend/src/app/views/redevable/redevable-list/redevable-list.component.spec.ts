import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevableListComponent } from './redevable-list.Component';

describe('RedevableListComponent', () => {
  let component: RedevableListComponent;
  let fixture: ComponentFixture<RedevableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedevableListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedevableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
