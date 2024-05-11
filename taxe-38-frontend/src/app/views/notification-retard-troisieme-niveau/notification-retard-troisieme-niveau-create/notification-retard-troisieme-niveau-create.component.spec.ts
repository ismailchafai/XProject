import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardTroisiemeNiveauCreateComponent } from './user-create.component';

describe('NotificationRetardTroisiemeNiveauCreateComponent', () => {
  let component: NotificationRetardTroisiemeNiveauCreateComponent;
  let fixture: ComponentFixture<NotificationRetardTroisiemeNiveauCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardTroisiemeNiveauCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRetardTroisiemeNiveauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
