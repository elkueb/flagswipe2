import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrybrowseComponent } from './countrybrowse.component';

describe('CountrybrowseComponent', () => {
  let component: CountrybrowseComponent;
  let fixture: ComponentFixture<CountrybrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrybrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrybrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
