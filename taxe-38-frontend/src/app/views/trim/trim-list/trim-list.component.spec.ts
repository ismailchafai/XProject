import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimListComponent } from './trim-list.Component';

describe('TrimListComponent', () => {
  let component: TrimListComponent;
  let fixture: ComponentFixture<TrimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
