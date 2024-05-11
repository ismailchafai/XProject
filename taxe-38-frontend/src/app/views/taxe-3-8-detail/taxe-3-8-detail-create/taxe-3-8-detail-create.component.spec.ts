import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxe38DetailCreateComponent } from './user-create.component';

describe('Taxe38DetailCreateComponent', () => {
  let component: Taxe38DetailCreateComponent;
  let fixture: ComponentFixture<Taxe38DetailCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taxe38DetailCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taxe38DetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
