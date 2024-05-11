import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardTroisiemeNiveauListComponent } from './notification-retard-troisieme-niveau-list.Component';

describe('NotificationRetardTroisiemeNiveauListComponent', () => {
  let component: NotificationRetardTroisiemeNiveauListComponent;
  let fixture: ComponentFixture<NotificationRetardTroisiemeNiveauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardTroisiemeNiveauListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationRetardTroisiemeNiveauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
