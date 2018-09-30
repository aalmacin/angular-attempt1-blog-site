import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePostsComponent } from './home-posts.component';
import {SummarizedPostComponent} from '../summarized-post/summarized-post.component';

describe('HomePostsComponent', () => {
  let component: HomePostsComponent;
  let fixture: ComponentFixture<HomePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePostsComponent, SummarizedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
