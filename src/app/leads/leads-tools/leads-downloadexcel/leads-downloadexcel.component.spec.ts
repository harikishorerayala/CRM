import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDownloadexcelComponent } from './leads-downloadexcel.component';

describe('LeadsDownloadexcelComponent', () => {
  let component: LeadsDownloadexcelComponent;
  let fixture: ComponentFixture<LeadsDownloadexcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDownloadexcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDownloadexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
