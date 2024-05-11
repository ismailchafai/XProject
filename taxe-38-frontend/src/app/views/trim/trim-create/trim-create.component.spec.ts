import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimCreateComponent } from './user-create.component';

describe('TrimCreateComponent', () => {
  let component: TrimCreateComponent;
  let fixture: ComponentFixture<TrimCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrimCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
