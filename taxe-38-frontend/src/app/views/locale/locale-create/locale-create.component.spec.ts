import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleCreateComponent } from './user-create.component';

describe('LocaleCreateComponent', () => {
  let component: LocaleCreateComponent;
  let fixture: ComponentFixture<LocaleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
