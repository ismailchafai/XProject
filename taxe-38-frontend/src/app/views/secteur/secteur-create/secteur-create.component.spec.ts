import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurCreateComponent } from './user-create.component';

describe('SecteurCreateComponent', () => {
  let component: SecteurCreateComponent;
  let fixture: ComponentFixture<SecteurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecteurCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecteurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
