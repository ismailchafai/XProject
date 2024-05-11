import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxTaxe38ListComponent } from './taux-taxe-3-8-list.Component';

describe('TauxTaxe38ListComponent', () => {
  let component: TauxTaxe38ListComponent;
  let fixture: ComponentFixture<TauxTaxe38ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxTaxe38ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TauxTaxe38ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
