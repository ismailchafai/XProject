import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierCreateComponent } from './user-create.component';

describe('QuartierCreateComponent', () => {
  let component: QuartierCreateComponent;
  let fixture: ComponentFixture<QuartierCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartierCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
