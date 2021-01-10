import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDownloadpdfComponent } from './leads-downloadpdf.component';

describe('LeadsDownloadpdfComponent', () => {
  let component: LeadsDownloadpdfComponent;
  let fixture: ComponentFixture<LeadsDownloadpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsDownloadpdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDownloadpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
