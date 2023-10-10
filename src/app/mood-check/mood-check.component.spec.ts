import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodCheckComponent } from './mood-check.component';

describe('MoodCheckComponent', () => {
  let component: MoodCheckComponent;
  let fixture: ComponentFixture<MoodCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodCheckComponent]
    });
    fixture = TestBed.createComponent(MoodCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
