import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxe38CreateComponent } from './user-create.component';

describe('Taxe38CreateComponent', () => {
  let component: Taxe38CreateComponent;
  let fixture: ComponentFixture<Taxe38CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taxe38CreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taxe38CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
