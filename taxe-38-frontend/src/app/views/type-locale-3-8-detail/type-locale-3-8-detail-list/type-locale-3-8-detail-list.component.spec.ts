import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLocale38DetailListComponent } from './type-locale-3-8-detail-list.Component';

describe('TypeLocale38DetailListComponent', () => {
  let component: TypeLocale38DetailListComponent;
  let fixture: ComponentFixture<TypeLocale38DetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeLocale38DetailListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeLocale38DetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
