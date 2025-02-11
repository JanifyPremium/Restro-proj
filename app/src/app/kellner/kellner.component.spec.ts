import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KellnerComponent } from './kellner.component';

describe('KellnerComponent', () => {
  let component: KellnerComponent;
  let fixture: ComponentFixture<KellnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KellnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KellnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
