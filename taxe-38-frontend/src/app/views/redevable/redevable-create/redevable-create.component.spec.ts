import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevableCreateComponent } from './user-create.component';

describe('RedevableCreateComponent', () => {
  let component: RedevableCreateComponent;
  let fixture: ComponentFixture<RedevableCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedevableCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedevableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
