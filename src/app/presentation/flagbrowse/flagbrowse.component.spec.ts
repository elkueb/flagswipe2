import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagbrowseComponent } from './flagbrowse.component';

describe('FlagbrowseComponent', () => {
  let component: FlagbrowseComponent;
  let fixture: ComponentFixture<FlagbrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagbrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagbrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
