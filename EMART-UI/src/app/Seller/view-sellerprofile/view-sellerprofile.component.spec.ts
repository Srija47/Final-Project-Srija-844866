import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellerprofileComponent } from './view-sellerprofile.component';

describe('ViewSellerprofileComponent', () => {
  let component: ViewSellerprofileComponent;
  let fixture: ComponentFixture<ViewSellerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSellerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSellerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
