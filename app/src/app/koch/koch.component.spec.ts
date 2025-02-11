import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KochComponent } from './koch.component';

describe('KochComponent', () => {
  let component: KochComponent;
  let fixture: ComponentFixture<KochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KochComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
