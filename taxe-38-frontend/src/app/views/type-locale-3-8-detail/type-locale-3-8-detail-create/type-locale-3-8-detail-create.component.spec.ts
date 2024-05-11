import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLocale38DetailCreateComponent } from './user-create.component';

describe('TypeLocale38DetailCreateComponent', () => {
  let component: TypeLocale38DetailCreateComponent;
  let fixture: ComponentFixture<TypeLocale38DetailCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeLocale38DetailCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeLocale38DetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
