import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KellnerViewComponent } from './kellner-view.component';

describe('KellnerViewComponent', () => {
  let component: KellnerViewComponent;
  let fixture: ComponentFixture<KellnerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KellnerViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KellnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
