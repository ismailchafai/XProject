import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieLocaleListComponent } from './categorie-locale-list.Component';

describe('CategorieLocaleListComponent', () => {
  let component: CategorieLocaleListComponent;
  let fixture: ComponentFixture<CategorieLocaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieLocaleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieLocaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
