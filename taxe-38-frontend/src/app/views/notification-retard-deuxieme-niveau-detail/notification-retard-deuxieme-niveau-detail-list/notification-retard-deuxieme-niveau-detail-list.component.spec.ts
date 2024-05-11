import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardDeuxiemeNiveauDetailListComponent } from './notification-retard-deuxieme-niveau-detail-list.Component';

describe('NotificationRetardDeuxiemeNiveauDetailListComponent', () => {
  let component: NotificationRetardDeuxiemeNiveauDetailListComponent;
  let fixture: ComponentFixture<NotificationRetardDeuxiemeNiveauDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardDeuxiemeNiveauDetailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationRetardDeuxiemeNiveauDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
