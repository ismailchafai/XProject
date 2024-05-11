import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locale38DetailCreateComponent } from './user-create.component';

describe('Locale38DetailCreateComponent', () => {
  let component: Locale38DetailCreateComponent;
  let fixture: ComponentFixture<Locale38DetailCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Locale38DetailCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Locale38DetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
