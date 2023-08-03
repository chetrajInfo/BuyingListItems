import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetaccountComponent } from './resetaccount.component';

describe('ResetaccountComponent', () => {
  let component: ResetaccountComponent;
  let fixture: ComponentFixture<ResetaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetaccountComponent]
    });
    fixture = TestBed.createComponent(ResetaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
