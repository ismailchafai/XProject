import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRetardDeuxiemeNiveauDetailCreateComponent } from './user-create.component';

describe('NotificationRetardDeuxiemeNiveauDetailCreateComponent', () => {
  let component: NotificationRetardDeuxiemeNiveauDetailCreateComponent;
  let fixture: ComponentFixture<NotificationRetardDeuxiemeNiveauDetailCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRetardDeuxiemeNiveauDetailCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRetardDeuxiemeNiveauDetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
