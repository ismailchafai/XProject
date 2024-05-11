import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardPremierNiveauListComponent } from './notification-retard-premier-niveau-list.Component';

describe('NotificationRetardPremierNiveauListComponent', () => {
  let component: NotificationRetardPremierNiveauListComponent;
  let fixture: ComponentFixture<NotificationRetardPremierNiveauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardPremierNiveauListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationRetardPremierNiveauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
