import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardPremierNiveauCreateComponent } from './user-create.component';

describe('NotificationRetardPremierNiveauCreateComponent', () => {
  let component: NotificationRetardPremierNiveauCreateComponent;
  let fixture: ComponentFixture<NotificationRetardPremierNiveauCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardPremierNiveauCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRetardPremierNiveauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
