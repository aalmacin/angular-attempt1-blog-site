import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FeaturedPostComponent} from './featured-post/featured-post.component';
import {HomePostsComponent} from './home-posts/home-posts.component';
import {SummarizedPostComponent} from './summarized-post/summarized-post.component';
import {SubscribeBoxComponent} from './subscribe-box/subscribe-box.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FeaturedPostComponent,
        HomePostsComponent,
        SummarizedPostComponent,
        SubscribeBoxComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render Home in nav bar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(Array.from(compiled.querySelectorAll('.main-nav li a'))
      .map(
        (htmlNode: HTMLElement) => htmlNode.textContent
      )).toEqual(['Home', 'Articles']);
  }));
});
