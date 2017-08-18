import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputListComponent } from './tags-input.component';

describe('TextInputListComponent', () => {
  let component: TextInputListComponent;
  let fixture: ComponentFixture<TextInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
