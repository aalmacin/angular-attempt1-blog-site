import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarizedPostComponent } from './summarized-post.component';

describe('SummarizedPostComponent', () => {
  let component: SummarizedPostComponent;
  let fixture: ComponentFixture<SummarizedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarizedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarizedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
