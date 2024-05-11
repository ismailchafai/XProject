import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxTaxe38CreateComponent } from './user-create.component';

describe('TauxTaxe38CreateComponent', () => {
  let component: TauxTaxe38CreateComponent;
  let fixture: ComponentFixture<TauxTaxe38CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxTaxe38CreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxTaxe38CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
