import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieLocaleCreateComponent } from './user-create.component';

describe('CategorieLocaleCreateComponent', () => {
  let component: CategorieLocaleCreateComponent;
  let fixture: ComponentFixture<CategorieLocaleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieLocaleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieLocaleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
