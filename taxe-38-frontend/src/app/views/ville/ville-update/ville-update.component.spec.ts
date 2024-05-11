import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleCreateComponent } from './user-create.component';

describe('VilleCreateComponent', () => {
  let component: VilleCreateComponent;
  let fixture: ComponentFixture<VilleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
