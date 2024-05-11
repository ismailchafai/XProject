import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardDeuxiemeNiveauCreateComponent } from './user-create.component';

describe('NotificationRetardDeuxiemeNiveauCreateComponent', () => {
  let component: NotificationRetardDeuxiemeNiveauCreateComponent;
  let fixture: ComponentFixture<NotificationRetardDeuxiemeNiveauCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardDeuxiemeNiveauCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRetardDeuxiemeNiveauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
