import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardDeuxiemeNiveauDetailType38ListComponent } from './notification-retard-deuxieme-niveau-detail-type-3-8-list.Component';

describe('NotificationRetardDeuxiemeNiveauDetailType38ListComponent', () => {
  let component: NotificationRetardDeuxiemeNiveauDetailType38ListComponent;
  let fixture: ComponentFixture<NotificationRetardDeuxiemeNiveauDetailType38ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardDeuxiemeNiveauDetailType38ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationRetardDeuxiemeNiveauDetailType38ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
