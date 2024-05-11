import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardDeuxiemeNiveauDetailType38CreateComponent } from './user-create.component';

describe('NotificationRetardDeuxiemeNiveauDetailType38CreateComponent', () => {
  let component: NotificationRetardDeuxiemeNiveauDetailType38CreateComponent;
  let fixture: ComponentFixture<NotificationRetardDeuxiemeNiveauDetailType38CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardDeuxiemeNiveauDetailType38CreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRetardDeuxiemeNiveauDetailType38CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
