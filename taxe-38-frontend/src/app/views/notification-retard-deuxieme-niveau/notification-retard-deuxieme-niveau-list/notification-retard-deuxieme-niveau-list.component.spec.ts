import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardDeuxiemeNiveauListComponent } from './notification-retard-deuxieme-niveau-list.Component';

describe('NotificationRetardDeuxiemeNiveauListComponent', () => {
  let component: NotificationRetardDeuxiemeNiveauListComponent;
  let fixture: ComponentFixture<NotificationRetardDeuxiemeNiveauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardDeuxiemeNiveauListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationRetardDeuxiemeNiveauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
